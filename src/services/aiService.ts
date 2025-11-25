import { openAiApi } from '../hooks/openAiApi';

export const fetchItemsFromOpenAI = async (img: string) => {
  const response = await openAiApi.post('', {
    model: 'gpt-4o',
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
            text: 'Analyzuj toto jídlo a odpověz ve formátu JSON: {"name": "název jídla", "value": "kalorická hodnota v KCal (jen číslo), "description": "rozepsané nutriční hodnoty".',
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
  const parsed = JSON.parse(cleaned);
  if (!parsed.name || !parsed.value) {
    throw new Error('Jídlo se nepodařilo rozpoznat');
  }

  return {
    name: parsed.name,
    value: Number(parsed.value),
    description: parsed.description || '',
  };
};
