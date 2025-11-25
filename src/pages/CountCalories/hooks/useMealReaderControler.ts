import { useState } from 'react';
import { fetchItemsFromOpenAI } from '../../../services/aiService';
import type { mealData } from '../../../models/mealData';
import { useMutation } from '@tanstack/react-query';

const useMealRecognition = () => {
  return useMutation<mealData, Error, string>({
    mutationFn: async (imageBase64: string) => {
      return await fetchItemsFromOpenAI(imageBase64);
    },
  });
};

export const useMealReaderControler = () => {
  const [image, setImage] = useState<null | string>(null);

  const {
    mutate: analyze,
    data: result,
    error,
    isPending: loading,
    reset,
  } = useMealRecognition();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setImage(base64);
      reset();
      analyze(base64);
    };
    reader.readAsDataURL(file);
  };

  return { image, loading, error, result, handleImageChange };
};
