const getItem = (STORAGE_KEY: string) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

const setItem = (STORAGE_KEY: string, value: unknown) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
};

const removeItem = (STORAGE_KEY: string) => {
  localStorage.removeItem(STORAGE_KEY);
};

export const storageService = {
  getItem,
  setItem,
  removeItem,
};
