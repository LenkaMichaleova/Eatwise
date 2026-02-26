import { openAiApi } from '../api/openAiApi';

export const fetchItemsFromOpenAI = async (img: string) => {
  const response = await openAiApi.post('', {
    model: 'gpt-5.2',
    messages: [
      {
        role: 'system',
        content:
          'Jsi nutriční asistent. Z obrázku jídla urči, o jaké jídlo se jedná, jeho energetickou hodnotu a základní nutriční rozpis. Vrať výsledek výhradně jako validní JSON.',
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Analyzuj toto jídlo a odpověz ve formátu JSON: {"name": "název jídla", "value": "kalorická hodnota v KCal (jen číslo)", "kjValue": "kalorická hodnota v kJ (jen číslo)", "proteins": "počet gramů bílkovin (jen číslo)", "carbohydrates": "počet gramů sacharidů (jen číslo)", "fats": "počet gramů tuků (jen číslo)", "description": "rozepsaný popis jídla, pokud není k dispozici, ponech prázdné".',
          },
          { type: 'image_url', image_url: { url: img } },
        ],
      },
    ],
    temperature: 0.3,
  });

  const data = await response.data;
  const resp = data?.choices?.[0]?.message?.content;
  if (!resp) throw new Error('Žádná odpověď od OpenAI');

  const cleaned = resp.match(/\{[\s\S]*\}/)?.[0];
  try {
    JSON.parse(cleaned);
  } catch {
    throw new Error('Jídlo se nepodařilo rozpoznat');
  }

  const parsed = JSON.parse(cleaned);
  if (!parsed.name || !parsed.value) {
    throw new Error('Jídlo se nepodařilo rozpoznat');
  } else if (isNaN(Number(parsed.value))) {
    throw new Error('Kalorická hodnota není platné číslo');
  }

  return {
    name: parsed.name,
    value: Number(parsed.value),
    kjValue: Number(parsed.kjValue) || 0,
    description: parsed.description || '',
    proteins: Number(parsed.proteins) || 0,
    carbohydrates: Number(parsed.carbohydrates) || 0,
    fats: Number(parsed.fats) || 0,
  };
};
