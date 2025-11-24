import { useEffect, useState } from 'react';
import { fetchItemsFromOpenAI } from '../../../services/aiService';
import type { mealData } from '../../../models/mealData';

export const useMealReaderControler = () => {
  const [image, setImage] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<mealData>({
    name: '',
    value: 0,
    description: '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      setResult({
        name: '',
        value: 0,
        description: '',
      });
      setError('');
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const handleAI = async () => {
      if (!image) return;

      setLoading(true);
      setError('');
      try {
        setResult(await fetchItemsFromOpenAI(image));
      } catch (err) {
        setError('Nepodařilo se rozpoznat jídlo z obrázku.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    handleAI();
  }, [image]);

  return { image, loading, error, result, handleImageChange };
};
