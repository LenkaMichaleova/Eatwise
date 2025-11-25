import { useState } from 'react';
import { fetchItemsFromOpenAI } from '../../../services/aiService';
import type { mealData } from '../../../models/mealData';
import { useMutation } from '@tanstack/react-query';

const useMealRecognition = () =>
  useMutation<mealData, Error, string>({
    mutationFn: async (imageBase64: string) => {
      return await fetchItemsFromOpenAI(imageBase64);
    },
  });

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

// TODO: how can you be sure that reader.result is string? 🤔 TS is your friend here. so -> if !reader.result -> do nothing ; if typeof reader.result === 'string' -> your code ; else
// function arrayBufferToString(buffer, encoding = 'utf-8') {
// const decoder = new TextDecoder(encoding);
// return decoder.decode(buffer);
// }
