export type FoodType = 'snídaně' | 'svačina1' | 'oběd' | 'svačina2' | 'večeře';

type Ingredients = {
  name: string;
  amount: number;
};

export type Food = {
  id: number;
  title: string;
  type: FoodType;
  calories: number;
  kj: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
  ingredients: Ingredients[];
};

export const foodData: Food[] = [
  {
    id: 1,
    title: 'Granola s jogurtem',
    type: 'snídaně',
    calories: 350,
    kj: 1465,
    proteins: 14,
    carbohydrates: 52,
    fats: 9,
    ingredients: [
      { name: 'granola', amount: 50 },
      { name: 'bílý jogurt 3%', amount: 120 },
      { name: 'med', amount: 10 },
      { name: 'čerstvé ovoce', amount: 50 },
    ],
  },
  {
    id: 2,
    title: 'Brokolicová pomazánka, opečený toast',
    type: 'svačina1',
    calories: 190,
    kj: 795,
    proteins: 8,
    carbohydrates: 22,
    fats: 7,
    ingredients: [
      { name: 'vařená brokolice', amount: 70 },
      { name: 'lučina / ricotta', amount: 40 },
      { name: 'česnek', amount: 3 },
      { name: 'celozrnný toast', amount: 35 },
    ],
  },
  {
    id: 3,
    title: 'Vepřový mexický guláš s rýží',
    type: 'oběd',
    calories: 420,
    kj: 1760,
    proteins: 30,
    carbohydrates: 45,
    fats: 12,
    ingredients: [
      { name: 'vepřové maso (kýta)', amount: 120 },
      { name: 'paprika', amount: 60 },
      { name: 'cibule', amount: 40 },
      { name: 'rajčatový základ', amount: 80 },
      { name: 'mexické koření', amount: 5 },
      { name: 'rýže (vařená)', amount: 150 },
    ],
  },
  {
    id: 4,
    title: 'Obložené knuspi',
    type: 'svačina2',
    calories: 160,
    kj: 670,
    proteins: 7,
    carbohydrates: 22,
    fats: 4,
    ingredients: [
      { name: 'knuspi plátky', amount: 20 },
      { name: 'cottage / lučina', amount: 40 },
      { name: 'rajčata', amount: 50 },
      { name: 'pažitka', amount: 3 },
    ],
  },
  {
    id: 5,
    title: 'Salát s kuřecími kousky, dresink',
    type: 'večeře',
    calories: 322,
    kj: 1340,
    proteins: 27,
    carbohydrates: 32,
    fats: 6,
    ingredients: [
      { name: 'grilované kuřecí maso', amount: 110 },
      { name: 'ledový salát', amount: 70 },
      { name: 'rajčata', amount: 60 },
      { name: 'okurka', amount: 60 },
      { name: 'jogurtový dresink', amount: 40 },
    ],
  },
  {
    id: 6,
    title: 'Wrap se šunkou a sýrem, zeleninová obloha',
    type: 'snídaně',
    calories: 345,
    kj: 1443,
    proteins: 20,
    carbohydrates: 39,
    fats: 10,
    ingredients: [
      { name: 'pšeničná tortilla', amount: 60 },
      { name: 'šunka', amount: 40 },
      { name: 'sýr plátkový 30%', amount: 25 },
      { name: 'ledový salát', amount: 40 },
      { name: 'rajčata', amount: 50 },
      { name: 'jogurtový dresink', amount: 20 },
    ],
  },
  {
    id: 7,
    title: 'Meruňkový dezert s tvarohem',
    type: 'svačina1',
    calories: 185,
    kj: 774,
    proteins: 11,
    carbohydrates: 25,
    fats: 3,
    ingredients: [
      { name: 'nízkotučný tvaroh', amount: 80 },
      { name: 'meruňky (kompot nebo čerstvé)', amount: 70 },
      { name: 'med', amount: 8 },
      { name: 'skořice', amount: 1 },
    ],
  },
  {
    id: 8,
    title: 'Hovězí rajská omáčka, celozrnné těstoviny',
    type: 'oběd',
    calories: 435,
    kj: 1820,
    proteins: 29,
    carbohydrates: 55,
    fats: 10,
    ingredients: [
      { name: 'hovězí maso (zadní)', amount: 120 },
      { name: 'rajčatová omáčka', amount: 120 },
      { name: 'celozrnné těstoviny (vařené)', amount: 160 },
      { name: 'koření (bobkový list, nové koření)', amount: 2 },
      { name: 'řepný cukr / náhrada – malé množství', amount: 3 },
    ],
  },
  {
    id: 9,
    title: 'Zeleninový salát s vajíčkem a ořechy',
    type: 'svačina2',
    calories: 165,
    kj: 690,
    proteins: 8,
    carbohydrates: 10,
    fats: 9,
    ingredients: [
      { name: 'vařené vejce', amount: 50 },
      { name: 'mix salátů', amount: 60 },
      { name: 'rajčata', amount: 40 },
      { name: 'okurka', amount: 40 },
      { name: 'vlašské ořechy', amount: 10 },
    ],
  },
  {
    id: 10,
    title: 'Tuňákové karbanátky, okurkový salát',
    type: 'večeře',
    calories: 320,
    kj: 1338,
    proteins: 27,
    carbohydrates: 32,
    fats: 8,
    ingredients: [
      { name: 'tuňák ve vlastní šťávě', amount: 110 },
      {
        name: 'bramborová směs do karbanátků (vařené brambory)',
        amount: 60,
      },
      { name: 'vejce (část do směsi)', amount: 20 },
      { name: 'koření a bylinky', amount: 2 },
      { name: 'okurka', amount: 100 },
      { name: 'lehké zálivkové koření a ocet', amount: 10 },
    ],
  },
];
