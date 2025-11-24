export type foodTypes = 'snídaně' | 'svačina1' | 'oběd' | 'svačina2' | 'večeře';

export type Row = {
  id: number;
  name: string;
  type: foodTypes;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};
