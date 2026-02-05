export type FoodType = 'breakfast' | 'snack1' | 'lunch' | 'snack2' | 'dinner';

export type FoodIngredient = {
  ingredientId: number;
  amount: number; // gramy
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
  ingredients: FoodIngredient[];
};

export const foodData: Food[] = [
  {
    id: 1,
    title: 'Vločková kaše s tvarohem a ovocem',
    type: 'breakfast',
    calories: 360,
    kj: 1506,
    proteins: 31.9,
    carbohydrates: 41.5,
    fats: 7.6,
    ingredients: [
      { ingredientId: 1001, amount: 40 }, // ovesné vločky
      { ingredientId: 6001, amount: 150 }, // polotučný tvaroh
      { ingredientId: 2006, amount: 150 }, // lesní ovoce
      { ingredientId: 6005, amount: 100 }, // mléko 1.5 %
    ],
  },
  {
    id: 2,
    title: 'Obložené knuspi se šunkou a sýrem',
    type: 'snack1',
    calories: 145,
    kj: 607,
    proteins: 11.4,
    carbohydrates: 14.9,
    fats: 4.6,
    ingredients: [
      { ingredientId: 7002, amount: 15 }, // knuspi chléb
      { ingredientId: 5007, amount: 30 }, // šunka
      { ingredientId: 6008, amount: 20 }, // eidam 30 %
      { ingredientId: 3002, amount: 100 }, // okurka
    ],
  },
  {
    id: 3,
    title: 'Smažená rýže s hovězím masem',
    type: 'lunch',
    calories: 432,
    kj: 1807,
    proteins: 30.2,
    carbohydrates: 47.4,
    fats: 12.1,
    ingredients: [
      { ingredientId: 4003, amount: 160 }, // rýže vařená
      { ingredientId: 5003, amount: 110 }, // hovězí libové
      { ingredientId: 3010, amount: 150 }, // zeleninový mix
      { ingredientId: 8001, amount: 5 }, // olivový olej
    ],
  },
  {
    id: 4,
    title: 'Česneková pomazánka',
    type: 'snack2',
    calories: 144,
    kj: 602,
    proteins: 13.9,
    carbohydrates: 15.2,
    fats: 2.8,
    ingredients: [
      { ingredientId: 6001, amount: 100 }, // polotučný tvaroh
      { ingredientId: 7001, amount: 20 }, // kváskový chléb
      { ingredientId: 3005, amount: 10 }, // česnek
    ],
  },
  {
    id: 5,
    title: 'Zapečený květák s bramborem a rajčatovým salátem',
    type: 'dinner',
    calories: 357,
    kj: 1493,
    proteins: 16.4,
    carbohydrates: 41.2,
    fats: 15.1,
    ingredients: [
      { ingredientId: 3007, amount: 200 }, // květák
      { ingredientId: 4001, amount: 170 }, // brambory vařené
      { ingredientId: 3001, amount: 150 }, // rajče
      { ingredientId: 6008, amount: 30 }, // eidam 30 %
      { ingredientId: 8001, amount: 8 }, // olivový olej
    ],
  },
  {
    id: 6,
    title: 'Obložený kváskový chléb',
    type: 'breakfast',
    calories: 358,
    kj: 1498,
    proteins: 18.9,
    carbohydrates: 42.1,
    fats: 12.6,
    ingredients: [
      { ingredientId: 7001, amount: 70 }, // kváskový chléb
      { ingredientId: 5007, amount: 40 }, // šunka
      { ingredientId: 6008, amount: 25 }, // eidam 30 %
      { ingredientId: 3001, amount: 120 }, // rajče
      { ingredientId: 3009, amount: 40 }, // listový salát
    ],
  },
  {
    id: 7,
    title: 'Ovocný rýžový chlebíček',
    type: 'snack1',
    calories: 144,
    kj: 602,
    proteins: 2.1,
    carbohydrates: 31.4,
    fats: 1.2,
    ingredients: [
      { ingredientId: 7003, amount: 20 }, // rýžové chlebíčky
      { ingredientId: 2001, amount: 120 }, // jablko
    ],
  },
  {
    id: 8,
    title: 'Kuřecí plátek, cizrnový salát',
    type: 'lunch',
    calories: 431,
    kj: 1803,
    proteins: 36.8,
    carbohydrates: 33.7,
    fats: 12.4,
    ingredients: [
      { ingredientId: 5001, amount: 150 }, // kuřecí prsa
      { ingredientId: 4008, amount: 120 }, // cizrna vařená
      { ingredientId: 3010, amount: 150 }, // zeleninový mix
      { ingredientId: 8001, amount: 7 }, // olivový olej
    ],
  },
  {
    id: 9,
    title: 'Sýrové placičky, tzatziki',
    type: 'snack2',
    calories: 145,
    kj: 607,
    proteins: 10.6,
    carbohydrates: 9.4,
    fats: 7.8,
    ingredients: [
      { ingredientId: 6008, amount: 35 }, // eidam 30 %
      { ingredientId: 6004, amount: 100 }, // jogurt bílý
      { ingredientId: 3005, amount: 5 }, // česnek
      { ingredientId: 3002, amount: 80 }, // okurka
    ],
  },
  {
    id: 10,
    title: 'Zeleninový salát s trhaným vepřovým masem, dresing',
    type: 'dinner',
    calories: 356,
    kj: 1489,
    proteins: 25.4,
    carbohydrates: 18.6,
    fats: 18.7,
    ingredients: [
      { ingredientId: 5004, amount: 120 }, // vepřové libové
      { ingredientId: 3010, amount: 200 }, // zeleninový mix
      { ingredientId: 8006, amount: 40 }, // dresink (jogurtový)
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 11,
    title: 'Ovocný koláč s tvarohem',
    type: 'breakfast',
    calories: 360,
    kj: 1506,
    proteins: 20.8,
    carbohydrates: 46.9,
    fats: 9.4,
    ingredients: [
      { ingredientId: 1002, amount: 60 }, // celozrnná mouka
      { ingredientId: 6002, amount: 120 }, // tvaroh
      { ingredientId: 2001, amount: 150 }, // jablko
      { ingredientId: 6006, amount: 60 }, // vejce
      { ingredientId: 8004, amount: 15 }, // med
    ],
  },
  {
    id: 12,
    title: 'Čočková polévka',
    type: 'snack1',
    calories: 145,
    kj: 607,
    proteins: 9.6,
    carbohydrates: 21.8,
    fats: 2.1,
    ingredients: [
      { ingredientId: 4007, amount: 200 }, // čočka vařená
      { ingredientId: 3004, amount: 60 }, // cibule
      { ingredientId: 3010, amount: 100 }, // zeleninový mix
      { ingredientId: 8001, amount: 3 }, // olivový olej
    ],
  },
  {
    id: 13,
    title: 'Boloňské špagety se sýrem',
    type: 'lunch',
    calories: 435,
    kj: 1821,
    proteins: 27.4,
    carbohydrates: 48.6,
    fats: 13.2,
    ingredients: [
      { ingredientId: 4005, amount: 180 }, // celozrnné těstoviny vařené
      { ingredientId: 5003, amount: 100 }, // hovězí libové
      { ingredientId: 3001, amount: 120 }, // rajče
      { ingredientId: 3004, amount: 50 }, // cibule
      { ingredientId: 6008, amount: 25 }, // eidam 30 %
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 14,
    title: 'Vajíčkový salát s celozrnným toustem',
    type: 'snack2',
    calories: 143,
    kj: 598,
    proteins: 11.9,
    carbohydrates: 14.6,
    fats: 6.7,
    ingredients: [
      { ingredientId: 6006, amount: 100 }, // vejce
      { ingredientId: 7001, amount: 30 }, // kváskový chléb (toast)
      { ingredientId: 3002, amount: 80 }, // okurka
      { ingredientId: 6004, amount: 50 }, // jogurt bílý
    ],
  },
  {
    id: 15,
    title: 'Caesar salát',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 29.1,
    carbohydrates: 18.3,
    fats: 17.6,
    ingredients: [
      { ingredientId: 5001, amount: 130 }, // kuřecí prsa
      { ingredientId: 3009, amount: 150 }, // listový salát
      { ingredientId: 6008, amount: 30 }, // eidam 30 %
      { ingredientId: 7006, amount: 15 }, // krekry
      { ingredientId: 8006, amount: 40 }, // dresink
    ],
  },
  {
    id: 16,
    title: 'Celozrnná bagetka se šunkou',
    type: 'breakfast',
    calories: 359,
    kj: 1502,
    proteins: 30.0,
    carbohydrates: 39.0,
    fats: 9.2,
    ingredients: [
      { ingredientId: 7004, amount: 60 }, // celozrnná bagetka
      { ingredientId: 5007, amount: 70 }, // šunka
      { ingredientId: 6008, amount: 30 }, // eidam 30 %
      { ingredientId: 3001, amount: 150 }, // rajče
      { ingredientId: 3009, amount: 100 }, // listový salát
    ],
  },
  {
    id: 17,
    title: 'Sladko slaný dezert s hruškou a ořechy',
    type: 'snack1',
    calories: 144,
    kj: 602,
    proteins: 5.9,
    carbohydrates: 17.1,
    fats: 6.6,
    ingredients: [
      { ingredientId: 2002, amount: 100 }, // hruška
      { ingredientId: 8002, amount: 10 }, // ořechy mix
      { ingredientId: 6001, amount: 25 }, // polotučný tvaroh
    ],
  },
  {
    id: 18,
    title: 'Kuřecí směs na kari, divoká rýže',
    type: 'lunch',
    calories: 430,
    kj: 1799,
    proteins: 37.3,
    carbohydrates: 44.0,
    fats: 11.0,
    ingredients: [
      { ingredientId: 5001, amount: 120 }, // kuřecí prsa
      { ingredientId: 4004, amount: 150 }, // divoká rýže
      { ingredientId: 3010, amount: 250 }, // zeleninový mix
      { ingredientId: 8001, amount: 8 }, // olivový olej
      { ingredientId: 9001, amount: 5 }, // kari koření
    ],
  },
  {
    id: 19,
    title: 'Tuňáková pomazánka',
    type: 'snack2',
    calories: 142,
    kj: 594,
    proteins: 24.5,
    carbohydrates: 6.8,
    fats: 1.8,
    ingredients: [
      { ingredientId: 5006, amount: 60 }, // tuňák ve vlastní šťávě
      { ingredientId: 6001, amount: 50 }, // polotučný tvaroh
      { ingredientId: 7001, amount: 10 }, // kváskový chléb
      { ingredientId: 3005, amount: 2 }, // česnek
    ],
  },
  {
    id: 20,
    title: 'Vepřové medailonky, salát coleslaw',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 32.9,
    carbohydrates: 13.6,
    fats: 18.3,
    ingredients: [
      { ingredientId: 5004, amount: 110 }, // vepřové libové
      { ingredientId: 3010, amount: 200 }, // zeleninový mix
      { ingredientId: 8006, amount: 60 }, // dresink (jogurtový)
      { ingredientId: 8001, amount: 7 }, // olivový olej
    ],
  },
  {
    id: 21,
    title: 'Borůvkový tvaroháček, lupínky',
    type: 'breakfast',
    calories: 360,
    kj: 1506,
    proteins: 30.8,
    carbohydrates: 36.9,
    fats: 8.2,
    ingredients: [
      { ingredientId: 6001, amount: 200 }, // polotučný tvaroh
      { ingredientId: 2005, amount: 150 }, // borůvky
      { ingredientId: 7003, amount: 20 }, // rýžové chlebíčky (lupínky)
      { ingredientId: 8004, amount: 10 }, // med
    ],
  },
  {
    id: 22,
    title: 'Mini mozzarella s cherry rajčaty a bazalkou, křehčený plátek',
    type: 'snack1',
    calories: 145,
    kj: 607,
    proteins: 9.6,
    carbohydrates: 5.8,
    fats: 9.8,
    ingredients: [
      { ingredientId: 6009, amount: 60 }, // mozzarella
      { ingredientId: 3001, amount: 120 }, // cherry rajčata
      { ingredientId: 3009, amount: 10 }, // listová bazalka (listový salát)
      { ingredientId: 5001, amount: 40 }, // křehčený kuřecí plátek
    ],
  },
  {
    id: 23,
    title: 'Celozrnné penne se sýrovou omáčkou, brokolicí a kuřecím masem',
    type: 'lunch',
    calories: 435,
    kj: 1821,
    proteins: 34.7,
    carbohydrates: 46.8,
    fats: 13.4,
    ingredients: [
      { ingredientId: 4005, amount: 180 }, // celozrnné těstoviny
      { ingredientId: 5001, amount: 120 }, // kuřecí prsa
      { ingredientId: 3006, amount: 150 }, // brokolice
      { ingredientId: 6008, amount: 30 }, // eidam 30 %
      { ingredientId: 6005, amount: 50 }, // mléko 1.5 %
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 24,
    title: 'Salát s bulgurem',
    type: 'snack2',
    calories: 144,
    kj: 602,
    proteins: 6.8,
    carbohydrates: 23.4,
    fats: 3.6,
    ingredients: [
      { ingredientId: 4006, amount: 120 }, // bulgur vařený
      { ingredientId: 3010, amount: 150 }, // zeleninový mix
      { ingredientId: 8001, amount: 4 }, // olivový olej
    ],
  },
  {
    id: 25,
    title: 'Wrap s hovězím masem a zeleninou',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 27.9,
    carbohydrates: 34.6,
    fats: 14.8,
    ingredients: [
      { ingredientId: 7005, amount: 60 }, // tortilla
      { ingredientId: 5003, amount: 110 }, // hovězí libové
      { ingredientId: 3010, amount: 200 }, // zeleninový mix
      { ingredientId: 8006, amount: 40 }, // dresink
    ],
  },
  {
    id: 26,
    title: 'Hermelínová pomazánka, kváskový chléb',
    type: 'breakfast',
    calories: 357,
    kj: 1494,
    proteins: 26.3,
    carbohydrates: 25.9,
    fats: 16.6,
    ingredients: [
      { ingredientId: 6010, amount: 50 }, // hermelín
      { ingredientId: 6001, amount: 80 }, // polotučný tvaroh
      { ingredientId: 7001, amount: 50 }, // kváskový chléb
    ],
  },
  {
    id: 27,
    title: 'Jablíčka ve skořici s polotvrdým tvarohem',
    type: 'snack1',
    calories: 144,
    kj: 602,
    proteins: 16.3,
    carbohydrates: 17.8,
    fats: 2.2,
    ingredients: [
      { ingredientId: 2001, amount: 100 }, // jablko
      { ingredientId: 6001, amount: 100 }, // polotučný tvaroh (polotvrdý tvaroh)
      { ingredientId: 9002, amount: 1 }, // skořice mletá
    ],
  },
  {
    id: 28,
    title: 'Francouzské brambory se šunkou a vajíčkem',
    type: 'lunch',
    calories: 430,
    kj: 1799,
    proteins: 30.1,
    carbohydrates: 44.7,
    fats: 14.7,
    ingredients: [
      { ingredientId: 4001, amount: 200 }, // brambory vařené
      { ingredientId: 5007, amount: 40 }, // šunka
      { ingredientId: 6006, amount: 140 }, // vejce
      { ingredientId: 3004, amount: 30 }, // cibule
    ],
  },
  {
    id: 29,
    title: 'Smoothie',
    type: 'snack2',
    calories: 141,
    kj: 590,
    proteins: 4.8,
    carbohydrates: 28.2,
    fats: 1.9,
    ingredients: [
      { ingredientId: 2003, amount: 80 }, // banán
      { ingredientId: 6005, amount: 100 }, // mléko 1.5 %
      { ingredientId: 2006, amount: 50 }, // lesní ovoce
    ],
  },
  {
    id: 30,
    title: 'Kuřecí kousky se sezamem a pečenou zeleninou',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 34.9,
    carbohydrates: 17.1,
    fats: 16.6,
    ingredients: [
      { ingredientId: 5001, amount: 120 }, // kuřecí prsa
      { ingredientId: 3010, amount: 250 }, // zeleninový mix (pečená zelenina)
      { ingredientId: 8007, amount: 20 }, // sezam
      { ingredientId: 8001, amount: 4 }, // olivový olej
    ],
  },
  {
    id: 31,
    title: 'Nepečené tousty se šunkou a sýrem, obloha',
    type: 'breakfast',
    calories: 359,
    kj: 1502,
    proteins: 29.0,
    carbohydrates: 35.6,
    fats: 10.7,
    ingredients: [
      { ingredientId: 7008, amount: 50 }, // celozrnný toastový chléb
      { ingredientId: 5007, amount: 50 }, // šunka
      { ingredientId: 6008, amount: 40 }, // eidam 30 %
      { ingredientId: 3010, amount: 250 }, // zeleninový mix (obloha)
    ],
  },
  {
    id: 32,
    title: 'Mandarinkový dezert s tvarohem a ořechy',
    type: 'snack1',
    calories: 147,
    kj: 615,
    proteins: 14.2,
    carbohydrates: 13.5,
    fats: 4.8,
    ingredients: [
      { ingredientId: 6001, amount: 80 }, // polotučný tvaroh
      { ingredientId: 2004, amount: 80 }, // mandarinka
      { ingredientId: 8002, amount: 5 }, // ořechy mix
    ],
  },
  {
    id: 33,
    title: 'Pikantní vepřový guláš, rýže',
    type: 'lunch',
    calories: 430,
    kj: 1799,
    proteins: 29.9,
    carbohydrates: 47.2,
    fats: 12.8,
    ingredients: [
      { ingredientId: 5004, amount: 100 }, // vepřové libové
      { ingredientId: 4003, amount: 150 }, // rýže vařená
      { ingredientId: 3004, amount: 40 }, // cibule
      { ingredientId: 8001, amount: 5 }, // olivový olej
      { ingredientId: 9003, amount: 3 }, // gulášové koření
    ],
  },
  {
    id: 34,
    title: 'Salát s kuřecím masem a balkánem',
    type: 'snack2',
    calories: 144,
    kj: 602,
    proteins: 13.9,
    carbohydrates: 9.1,
    fats: 5.3,
    ingredients: [
      { ingredientId: 5001, amount: 40 }, // kuřecí prsa
      { ingredientId: 6011, amount: 15 }, // balkánský sýr
      { ingredientId: 3010, amount: 175 }, // zeleninový mix
      { ingredientId: 8001, amount: 1 }, // olivový olej
    ],
  },
  {
    id: 35,
    title: 'Naše domácí sekaná, podzimní batátový salát',
    type: 'dinner',
    calories: 359,
    kj: 1502,
    proteins: 26.4,
    carbohydrates: 38.6,
    fats: 10.7,
    ingredients: [
      // sekaná
      { ingredientId: 5004, amount: 60 }, // vepřové libové
      { ingredientId: 6006, amount: 40 }, // vejce
      { ingredientId: 3004, amount: 10 }, // cibule
      { ingredientId: 1004, amount: 5 }, // strouhanka
      // batátový salát
      { ingredientId: 4002, amount: 125 }, // batáty
      { ingredientId: 3010, amount: 125 }, // zeleninový mix
      { ingredientId: 8006, amount: 40 }, // dresink (jogurtový)
    ],
  },
  {
    id: 36,
    title: 'Makovec s tvarohem',
    type: 'breakfast',
    calories: 362,
    kj: 1515,
    proteins: 22.4,
    carbohydrates: 31.8,
    fats: 15.6,
    ingredients: [
      { ingredientId: 6001, amount: 150 }, // polotučný tvaroh
      { ingredientId: 1005, amount: 25 }, // mák
      { ingredientId: 1001, amount: 40 }, // ovesné vločky (korpus)
      { ingredientId: 8004, amount: 10 }, // med
    ],
  },
  {
    id: 37,
    title: 'Sýrová pěna, krekry',
    type: 'snack1',
    calories: 146,
    kj: 611,
    proteins: 10.1,
    carbohydrates: 10.8,
    fats: 7.6,
    ingredients: [
      { ingredientId: 6008, amount: 30 }, // eidam 30 %
      { ingredientId: 6003, amount: 60 }, // řecký jogurt 2 %
      { ingredientId: 7005, amount: 15 }, // krekry
    ],
  },
  {
    id: 38,
    title: 'Hovězí nudličky s bramborem, zelný salát',
    type: 'lunch',
    calories: 435,
    kj: 1820,
    proteins: 32.6,
    carbohydrates: 36.9,
    fats: 15.4,
    ingredients: [
      { ingredientId: 5003, amount: 120 }, // hovězí libové
      { ingredientId: 4001, amount: 200 }, // brambory vařené
      { ingredientId: 3011, amount: 150 }, // bílé zelí
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 39,
    title: 'Obložený knäckebrot se šunkou, okurka',
    type: 'snack2',
    calories: 143,
    kj: 598,
    proteins: 10.7,
    carbohydrates: 14.9,
    fats: 3.8,
    ingredients: [
      { ingredientId: 7009, amount: 30 }, // knäckebrot
      { ingredientId: 5007, amount: 40 }, // šunka
      { ingredientId: 3004, amount: 100 }, // okurka
    ],
  },
  {
    id: 40,
    title: 'Marinovaný kuřecí plátek, salát z červené řepy',
    type: 'dinner',
    calories: 356,
    kj: 1489,
    proteins: 33.2,
    carbohydrates: 15.6,
    fats: 15.1,
    ingredients: [
      { ingredientId: 5001, amount: 130 }, // kuřecí prsa
      { ingredientId: 3006, amount: 180 }, // červená řepa
      { ingredientId: 8001, amount: 6 }, // olivový olej
      { ingredientId: 9001, amount: 5 }, // hořčice / marináda
    ],
  },
  {
    id: 41,
    title: 'Tortilla se 3 druhy sýra a zeleninou',
    type: 'breakfast',
    calories: 359,
    kj: 1502,
    proteins: 16.6,
    carbohydrates: 39.5,
    fats: 14.6,
    ingredients: [
      { ingredientId: 7005, amount: 50 }, // tortilla
      { ingredientId: 6008, amount: 10 }, // eidam 30 %
      { ingredientId: 6009, amount: 10 }, // mozzarella
      { ingredientId: 6011, amount: 30 }, // balkánský sýr
      { ingredientId: 3010, amount: 250 }, // zeleninový mix
    ],
  },
  {
    id: 42,
    title: 'Frankfurtská polévka',
    type: 'snack1',
    calories: 143,
    kj: 598,
    proteins: 3.7,
    carbohydrates: 19.6,
    fats: 5.6,
    ingredients: [
      { ingredientId: 5008, amount: 10 }, // frankfurtský párek
      { ingredientId: 4001, amount: 75 }, // brambory vařené
      { ingredientId: 3010, amount: 50 }, // zeleninový mix
      { ingredientId: 3004, amount: 20 }, // cibule
      { ingredientId: 8001, amount: 3 }, // olivový olej
    ],
  },
  {
    id: 43,
    title: 'Chili con carne s koriandrovou rýží',
    type: 'lunch',
    calories: 430,
    kj: 1799,
    proteins: 26.2,
    carbohydrates: 57.4,
    fats: 10.6,
    ingredients: [
      { ingredientId: 5003, amount: 60 }, // hovězí libové
      { ingredientId: 4009, amount: 60 }, // fazole vařené (kidney)
      { ingredientId: 4003, amount: 120 }, // rýže vařená
      { ingredientId: 3012, amount: 100 }, // rajčatové pyré / passata
      { ingredientId: 3004, amount: 40 }, // cibule
      { ingredientId: 8001, amount: 6 }, // olivový olej
      { ingredientId: 9005, amount: 10 }, // koriandr (čerstvý)
    ],
  },
  {
    id: 44,
    title: 'Karamelový dezert s mandličkami',
    type: 'snack2',
    calories: 145,
    kj: 607,
    proteins: 17.2,
    carbohydrates: 10.6,
    fats: 4.6,
    ingredients: [
      { ingredientId: 6001, amount: 100 }, // polotučný tvaroh
      { ingredientId: 8003, amount: 5 }, // mandle
      { ingredientId: 8008, amount: 10 }, // karamelová omáčka
    ],
  },
  {
    id: 45,
    title: 'Ryba na kmíně, zeleninový salát s fazolkami',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 37.6,
    carbohydrates: 29.7,
    fats: 9.5,
    ingredients: [
      { ingredientId: 5009, amount: 150 }, // bílá ryba (treska)
      { ingredientId: 4009, amount: 80 }, // fazole vařené (kidney)
      { ingredientId: 3010, amount: 200 }, // zeleninový mix
      { ingredientId: 8001, amount: 7 }, // olivový olej
      { ingredientId: 9004, amount: 3 }, // kmín
    ],
  },
  {
    id: 46,
    title: 'Zemlbába s tvarohem a jablky',
    type: 'breakfast',
    calories: 358,
    kj: 1498,
    proteins: 23.6,
    carbohydrates: 58.6,
    fats: 5.8,
    ingredients: [
      { ingredientId: 7010, amount: 30 }, // bílé pečivo (veka/rohlík)
      { ingredientId: 6005, amount: 50 }, // mléko 1.5 %
      { ingredientId: 6006, amount: 20 }, // vejce
      { ingredientId: 6001, amount: 100 }, // polotučný tvaroh
      { ingredientId: 2001, amount: 200 }, // jablko
      { ingredientId: 8004, amount: 10 }, // med
    ],
  },
  {
    id: 47,
    title: 'Salát s parmskou šunkou a mozzarellou, bazalka',
    type: 'snack1',
    calories: 144,
    kj: 602,
    proteins: 8.5,
    carbohydrates: 10.5,
    fats: 7.3,
    ingredients: [
      { ingredientId: 5010, amount: 10 }, // parmská šunka
      { ingredientId: 6009, amount: 15 }, // mozzarella
      { ingredientId: 3010, amount: 200 }, // zeleninový mix
      { ingredientId: 9006, amount: 5 }, // bazalka (čerstvá)
      { ingredientId: 8001, amount: 2 }, // olivový olej
    ],
  },
  {
    id: 48,
    title: 'Kuřecí kapsa plněná sýrem a bramborovou kaší, kyselá okurka',
    type: 'lunch',
    calories: 430,
    kj: 1799,
    proteins: 40.7,
    carbohydrates: 36.0,
    fats: 13.4,
    ingredients: [
      { ingredientId: 5001, amount: 130 }, // kuřecí prsa
      { ingredientId: 6008, amount: 20 }, // eidam 30 % (náplň)
      { ingredientId: 4001, amount: 150 }, // brambory vařené (kaše)
      { ingredientId: 6005, amount: 50 }, // mléko 1.5 % (kaše)
      { ingredientId: 8001, amount: 7 }, // olivový olej
      { ingredientId: 3013, amount: 150 }, // kyselá okurka
    ],
  },
  {
    id: 49,
    title: 'Rajčatová pomazánka, krekry',
    type: 'snack2',
    calories: 144,
    kj: 602,
    proteins: 12.0,
    carbohydrates: 17.6,
    fats: 3.2,
    ingredients: [
      { ingredientId: 6001, amount: 60 }, // polotučný tvaroh
      { ingredientId: 3012, amount: 50 }, // rajčatové pyré / passata
      { ingredientId: 3005, amount: 4 }, // česnek
      { ingredientId: 7006, amount: 16 }, // krekry
    ],
  },
  {
    id: 50,
    title: 'Grilovaný hermelín se švestkovou omáčkou',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 14.7,
    carbohydrates: 25.6,
    fats: 22.3,
    ingredients: [
      { ingredientId: 6010, amount: 60 }, // hermelín
      { ingredientId: 8009, amount: 50 }, // švestková omáčka
      { ingredientId: 3009, amount: 200 }, // listový salát
      { ingredientId: 8001, amount: 5 }, // olivový olej
    ],
  },
  {
    id: 51,
    title: 'Vaječná omeleta, kváskový chléb',
    type: 'breakfast',
    calories: 375,
    kj: 1569,
    proteins: 25.0,
    carbohydrates: 24.5,
    fats: 20.0,
    ingredients: [
      { ingredientId: 6006, amount: 130 }, // vejce
      { ingredientId: 7001, amount: 45 }, // kváskový chléb
      { ingredientId: 8001, amount: 4 }, // olivový olej
      { ingredientId: 3010, amount: 150 }, // zeleninový mix
    ],
  },
  {
    id: 52,
    title: 'Pudink s tvarohem',
    type: 'snack1',
    calories: 139,
    kj: 582,
    proteins: 13.6,
    carbohydrates: 15.0,
    fats: 3.0,
    ingredients: [
      { ingredientId: 8010, amount: 80 }, // pudink hotový (vanilkový)
      { ingredientId: 6001, amount: 70 }, // polotučný tvaroh
    ],
  },
  {
    id: 53,
    title: 'Špagety vepřovým masem a houbami, sypané parmazánem',
    type: 'lunch',
    calories: 433,
    kj: 1812,
    proteins: 32.2,
    carbohydrates: 40.8,
    fats: 14.3,
    ingredients: [
      { ingredientId: 4005, amount: 140 }, // celozrnné těstoviny vařené
      { ingredientId: 5004, amount: 80 }, // vepřové libové
      { ingredientId: 3014, amount: 150 }, // žampiony (houby)
      { ingredientId: 3012, amount: 80 }, // rajčatové pyré / passata
      { ingredientId: 8001, amount: 4 }, // olivový olej
      { ingredientId: 6012, amount: 8 }, // parmazán
    ],
  },
  {
    id: 54,
    title: 'Šunková pěna, rýžové chlebíčky',
    type: 'snack2',
    calories: 150,
    kj: 628,
    proteins: 11.3,
    carbohydrates: 14.0,
    fats: 4.1,
    ingredients: [
      { ingredientId: 5007, amount: 40 }, // šunka
      { ingredientId: 6004, amount: 100 }, // jogurt bílý
      { ingredientId: 7003, amount: 12 }, // rýžové chlebíčky
    ],
  },
  {
    id: 55,
    title: 'Salát s kuřecím masem a bulgurem, dresink',
    type: 'dinner',
    calories: 357,
    kj: 1494,
    proteins: 28.4,
    carbohydrates: 33.0,
    fats: 10.3,
    ingredients: [
      { ingredientId: 5001, amount: 100 }, // kuřecí prsa
      { ingredientId: 4006, amount: 120 }, // bulgur vařený
      { ingredientId: 3010, amount: 250 }, // zeleninový mix
      { ingredientId: 8006, amount: 40 }, // dresink (jogurtový)
      { ingredientId: 8001, amount: 4 }, // olivový olej
    ],
  },
  {
    id: 56,
    title: 'Palačinka s tvarohem a marmeládou',
    type: 'breakfast',
    calories: 358,
    kj: 1498,
    proteins: 22.9,
    carbohydrates: 49.7,
    fats: 7.5,
    ingredients: [
      { ingredientId: 1003, amount: 30 }, // pšeničná mouka
      { ingredientId: 6005, amount: 50 }, // mléko 1.5 %
      { ingredientId: 6006, amount: 40 }, // vejce
      { ingredientId: 6001, amount: 80 }, // polotučný tvaroh
      { ingredientId: 8005, amount: 35 }, // marmeláda
      { ingredientId: 8001, amount: 1 }, // olivový olej
    ],
  },
  {
    id: 57,
    title: 'Česnečka',
    type: 'snack1',
    calories: 143,
    kj: 598,
    proteins: 3.4,
    carbohydrates: 26.8,
    fats: 2.5,
    ingredients: [
      { ingredientId: 4001, amount: 80 }, // brambory vařené
      { ingredientId: 3005, amount: 2 }, // česnek
      { ingredientId: 3004, amount: 10 }, // cibule
      { ingredientId: 7001, amount: 20 }, // kváskový chléb
      { ingredientId: 8001, amount: 2 }, // olivový olej
    ],
  },
  {
    id: 58,
    title: 'Celozrnná bulka s trhaným hovězím',
    type: 'lunch',
    calories: 430,
    kj: 1799,
    proteins: 39.9,
    carbohydrates: 44.2,
    fats: 10.3,
    ingredients: [
      { ingredientId: 7011, amount: 80 }, // celozrnná bulka
      { ingredientId: 5003, amount: 120 }, // hovězí libové (trhané)
      { ingredientId: 3010, amount: 100 }, // zeleninový mix
    ],
  },
  {
    id: 59,
    title: 'Zdravá miska s avokádem a vajíčkem',
    type: 'snack2',
    calories: 144,
    kj: 602,
    proteins: 7.3,
    carbohydrates: 8.0,
    fats: 9.5,
    ingredients: [
      { ingredientId: 2010, amount: 30 }, // avokádo
      { ingredientId: 6006, amount: 40 }, // vejce
      { ingredientId: 3010, amount: 100 }, // zeleninový mix
      { ingredientId: 8001, amount: 1 }, // olivový olej
    ],
  },
  {
    id: 60,
    title: 'Zeleninový salát s grilovaným lososem',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 26.2,
    carbohydrates: 7.5,
    fats: 23.1,
    ingredients: [
      { ingredientId: 5005, amount: 120 }, // losos
      { ingredientId: 3010, amount: 150 }, // zeleninový mix
      { ingredientId: 8001, amount: 7 }, // olivový olej
    ],
  },
  {
    id: 61,
    title: 'Granola s jogurtem',
    type: 'breakfast',
    calories: 358,
    kj: 1498,
    proteins: 18.2,
    carbohydrates: 49.6,
    fats: 10.4,
    ingredients: [
      { ingredientId: 1010, amount: 55 }, // granola / müsli
      { ingredientId: 6004, amount: 200 }, // jogurt bílý
      { ingredientId: 2006, amount: 100 }, // lesní ovoce
    ],
  },
  {
    id: 62,
    title: 'Brokolicová pomazánka, opečený toust',
    type: 'snack1',
    calories: 144,
    kj: 602,
    proteins: 13.4,
    carbohydrates: 17.6,
    fats: 3.6,
    ingredients: [
      { ingredientId: 3006, amount: 120 }, // brokolice
      { ingredientId: 6001, amount: 90 }, // polotučný tvaroh
      { ingredientId: 3005, amount: 4 }, // česnek
      { ingredientId: 7008, amount: 25 }, // celozrnný toastový chléb
      { ingredientId: 8001, amount: 2 }, // olivový olej
    ],
  },
  {
    id: 63,
    title: 'Vepřový mexický guláš, rýže',
    type: 'lunch',
    calories: 430,
    kj: 1799,
    proteins: 28.9,
    carbohydrates: 52.6,
    fats: 10.9,
    ingredients: [
      { ingredientId: 5004, amount: 90 }, // vepřové libové
      { ingredientId: 4003, amount: 160 }, // rýže vařená
      { ingredientId: 4009, amount: 80 }, // fazole vařené (kidney)
      { ingredientId: 3012, amount: 120 }, // rajčatové pyré / passata
      { ingredientId: 3004, amount: 40 }, // cibule
      { ingredientId: 8001, amount: 5 }, // olivový olej
      { ingredientId: 9007, amount: 3 }, // mexické koření
    ],
  },
  {
    id: 64,
    title: 'Obložené knuspi',
    type: 'snack2',
    calories: 145,
    kj: 607,
    proteins: 11.7,
    carbohydrates: 15.2,
    fats: 4.5,
    ingredients: [
      { ingredientId: 7002, amount: 15 }, // knuspi chléb
      { ingredientId: 5007, amount: 30 }, // šunka
      { ingredientId: 6008, amount: 20 }, // eidam 30 %
      { ingredientId: 3002, amount: 100 }, // okurka
    ],
  },
  {
    id: 65,
    title: 'Salát s kuřecími kousky, dresink',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 29.7,
    carbohydrates: 18.4,
    fats: 16.8,
    ingredients: [
      { ingredientId: 5001, amount: 130 }, // kuřecí prsa
      { ingredientId: 3010, amount: 250 }, // zeleninový mix
      { ingredientId: 8006, amount: 50 }, // dresink (jogurtový)
      { ingredientId: 8001, amount: 5 }, // olivový olej
    ],
  },
  {
    id: 66,
    title: 'Wrap se šunkou a sýrem, zeleninová obloha',
    type: 'breakfast',
    calories: 358,
    kj: 1498,
    proteins: 24.3,
    carbohydrates: 34.6,
    fats: 13.2,
    ingredients: [
      { ingredientId: 7004, amount: 50 }, // tortilla
      { ingredientId: 5007, amount: 50 }, // šunka
      { ingredientId: 6008, amount: 40 }, // eidam 30 %
      { ingredientId: 3010, amount: 200 }, // zeleninový mix
      { ingredientId: 8001, amount: 3 }, // olivový olej
    ],
  },

  {
    id: 67,
    title: 'Meruňkový dezert s tvarohem',
    type: 'snack1',
    calories: 145,
    kj: 607,
    proteins: 14.2,
    carbohydrates: 15.8,
    fats: 3.2,
    ingredients: [
      { ingredientId: 6001, amount: 120 }, // polotučný tvaroh
      { ingredientId: 2005, amount: 120 }, // meruňky
      { ingredientId: 8004, amount: 5 }, // med
    ],
  },

  {
    id: 68,
    title: 'Hovězí rajská omáčka, celozrnné těstoviny',
    type: 'lunch',
    calories: 432,
    kj: 1807,
    proteins: 32.5,
    carbohydrates: 47.1,
    fats: 11.4,
    ingredients: [
      { ingredientId: 5003, amount: 110 }, // hovězí libové
      { ingredientId: 4006, amount: 160 }, // celozrnné těstoviny vařené
      { ingredientId: 3015, amount: 150 }, // rajská omáčka
      { ingredientId: 8001, amount: 5 }, // olivový olej
    ],
  },

  {
    id: 69,
    title: 'Zeleninový salát s vajíčkem a ořechy',
    type: 'snack2',
    calories: 146,
    kj: 611,
    proteins: 8.9,
    carbohydrates: 9.4,
    fats: 9.2,
    ingredients: [
      { ingredientId: 6006, amount: 60 }, // vejce
      { ingredientId: 3010, amount: 200 }, // zeleninový mix
      { ingredientId: 8011, amount: 8 }, // ořechy (drcené)
      { ingredientId: 8001, amount: 2 }, // olivový olej
    ],
  },

  {
    id: 70,
    title: 'Tuňákové karbanátky, okurkový salát',
    type: 'dinner',
    calories: 357,
    kj: 1494,
    proteins: 32.8,
    carbohydrates: 14.7,
    fats: 17.1,
    ingredients: [
      { ingredientId: 5006, amount: 120 }, // tuňák ve vlastní šťávě
      { ingredientId: 6006, amount: 40 }, // vejce
      { ingredientId: 1004, amount: 10 }, // strouhanka
      { ingredientId: 3004, amount: 200 }, // okurka
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 71,
    title: 'Sladký štrúdl s jablky a skořicí',
    type: 'breakfast',
    calories: 360,
    kj: 1506,
    proteins: 8.5,
    carbohydrates: 56.2,
    fats: 11.8,
    ingredients: [
      { ingredientId: 1003, amount: 50 }, // pšeničná mouka (těsto)
      { ingredientId: 2002, amount: 200 }, // jablko
      { ingredientId: 8004, amount: 10 }, // med
      { ingredientId: 9002, amount: 2 }, // skořice
      { ingredientId: 8001, amount: 6 }, // olej / tuk do těsta
    ],
  },
  {
    id: 72,
    title: 'Hovězí vývar, rýžové nudle',
    type: 'snack1',
    calories: 142,
    kj: 594,
    proteins: 9.6,
    carbohydrates: 18.5,
    fats: 3.1,
    ingredients: [
      { ingredientId: 5003, amount: 40 }, // hovězí maso
      { ingredientId: 4010, amount: 80 }, // rýžové nudle
      { ingredientId: 3010, amount: 80 }, // zelenina do vývaru
      { ingredientId: 8001, amount: 2 }, // tuk z vývaru
    ],
  },
  {
    id: 73,
    title: 'Rizoto s hříbky a parmazánem',
    type: 'lunch',
    calories: 432,
    kj: 1807,
    proteins: 17.4,
    carbohydrates: 59.2,
    fats: 13.5,
    ingredients: [
      { ingredientId: 4003, amount: 170 }, // rýže vařená
      { ingredientId: 3016, amount: 150 }, // hříbky
      { ingredientId: 6005, amount: 50 }, // mléko / vývar
      { ingredientId: 6012, amount: 12 }, // parmazán
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 74,
    title: 'Těstovinový salát s cottage sýrem',
    type: 'snack2',
    calories: 146,
    kj: 611,
    proteins: 11.9,
    carbohydrates: 16.4,
    fats: 4.3,
    ingredients: [
      { ingredientId: 4006, amount: 80 }, // celozrnné těstoviny
      { ingredientId: 6024, amount: 80 }, // cottage
      { ingredientId: 3010, amount: 150 }, // zelenina
      { ingredientId: 8001, amount: 2 }, // olej
    ],
  },
  {
    id: 75,
    title: 'Zapečené vepřové medailonky s mozzarellou a rajčaty',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 34.1,
    carbohydrates: 9.6,
    fats: 20.3,
    ingredients: [
      { ingredientId: 5004, amount: 130 }, // vepřové libové
      { ingredientId: 6009, amount: 50 }, // mozzarella
      { ingredientId: 3003, amount: 200 }, // rajče
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 76,
    title: 'Míchaná vajíčka s pažitkou, kváskovým chlebem',
    type: 'breakfast',
    calories: 372,
    kj: 1556,
    proteins: 23.7,
    carbohydrates: 24.8,
    fats: 21.6,
    ingredients: [
      { ingredientId: 6006, amount: 140 }, // vejce
      { ingredientId: 7001, amount: 50 }, // kváskový chléb
      { ingredientId: 9008, amount: 5 }, // pažitka
      { ingredientId: 8001, amount: 5 }, // olivový olej
    ],
  },
  {
    id: 77,
    title: 'Šunkové rolky s česnekovým dipem',
    type: 'snack1',
    calories: 145,
    kj: 607,
    proteins: 14.6,
    carbohydrates: 4.3,
    fats: 7.5,
    ingredients: [
      { ingredientId: 5007, amount: 80 }, // šunka
      { ingredientId: 6003, amount: 60 }, // řecký jogurt
      { ingredientId: 3005, amount: 4 }, // česnek
    ],
  },
  {
    id: 78,
    title: 'Domácí sekaná se šťouchaným bramborem',
    type: 'lunch',
    calories: 434,
    kj: 1816,
    proteins: 29.6,
    carbohydrates: 36.9,
    fats: 18.4,
    ingredients: [
      { ingredientId: 5004, amount: 100 }, // vepřové libové
      { ingredientId: 6006, amount: 40 }, // vejce
      { ingredientId: 1004, amount: 10 }, // strouhanka
      { ingredientId: 4001, amount: 200 }, // brambory
      { ingredientId: 8001, amount: 7 }, // olej / máslo
    ],
  },
  {
    id: 79,
    title: 'Sladký tvaroh s pomerančem',
    type: 'snack2',
    calories: 146,
    kj: 611,
    proteins: 16.4,
    carbohydrates: 14.8,
    fats: 2.6,
    ingredients: [
      { ingredientId: 6001, amount: 150 }, // tvaroh
      { ingredientId: 2011, amount: 120 }, // pomeranč
      { ingredientId: 8004, amount: 5 }, // med
    ],
  },
  {
    id: 80,
    title: 'Sýrový trojhránek, rajčatový salát s cibulí',
    type: 'dinner',
    calories: 357,
    kj: 1494,
    proteins: 13.2,
    carbohydrates: 10.5,
    fats: 27.4,
    ingredients: [
      { ingredientId: 6013, amount: 60 }, // tavený sýr
      { ingredientId: 3003, amount: 200 }, // rajče
      { ingredientId: 3004, amount: 50 }, // cibule
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 81,
    title: 'Zapečený toust se šunkou, okurkou',
    type: 'breakfast',
    calories: 360,
    kj: 1506,
    proteins: 26.8,
    carbohydrates: 34.7,
    fats: 12.9,
    ingredients: [
      { ingredientId: 7008, amount: 60 }, // celozrnný toastový chléb
      { ingredientId: 5007, amount: 60 }, // šunka
      { ingredientId: 6008, amount: 40 }, // eidam 30 %
      { ingredientId: 3004, amount: 120 }, // okurka
      { ingredientId: 8001, amount: 3 }, // olej
    ],
  },
  {
    id: 82,
    title: 'Vanilkový termix s lupínky',
    type: 'snack1',
    calories: 144,
    kj: 602,
    proteins: 9.1,
    carbohydrates: 20.4,
    fats: 3.2,
    ingredients: [
      { ingredientId: 6001, amount: 100 }, // tvaroh / termix základ
      { ingredientId: 8004, amount: 10 }, // cukr / med
      { ingredientId: 8012, amount: 15 }, // kukuřičné lupínky
    ],
  },
  {
    id: 83,
    title: 'Šunkofleky, kyselá okurka',
    type: 'lunch',
    calories: 435,
    kj: 1820,
    proteins: 26.4,
    carbohydrates: 48.1,
    fats: 14.7,
    ingredients: [
      { ingredientId: 4006, amount: 180 }, // těstoviny
      { ingredientId: 5007, amount: 80 }, // šunka
      { ingredientId: 6006, amount: 60 }, // vejce
      { ingredientId: 8001, amount: 6 }, // tuk
      { ingredientId: 3013, amount: 150 }, // kyselá okurka
    ],
  },
  {
    id: 84,
    title: 'Hermelínová pomazánka',
    type: 'snack2',
    calories: 146,
    kj: 611,
    proteins: 11.8,
    carbohydrates: 5.1,
    fats: 9.4,
    ingredients: [
      { ingredientId: 6010, amount: 50 }, // hermelín
      { ingredientId: 6001, amount: 70 }, // tvaroh
      { ingredientId: 3004, amount: 60 }, // cibule / okurka mix
    ],
  },
  {
    id: 85,
    title: 'Marinovaná krůtí prsa, řecký salát',
    type: 'dinner',
    calories: 357,
    kj: 1494,
    proteins: 35.8,
    carbohydrates: 10.6,
    fats: 18.7,
    ingredients: [
      { ingredientId: 5002, amount: 140 }, // krůtí prsa
      { ingredientId: 6011, amount: 40 }, // balkánský sýr
      { ingredientId: 3003, amount: 200 }, // rajče
      { ingredientId: 3004, amount: 100 }, // okurka
      { ingredientId: 8001, amount: 6 }, // olivový olej
    ],
  },
  {
    id: 86,
    title: 'Vafle s tvarohem a ovocem',
    type: 'breakfast',
    calories: 358,
    kj: 1498,
    proteins: 26.4,
    carbohydrates: 47.8,
    fats: 7.9,
    ingredients: [
      { ingredientId: 1001, amount: 55 }, // ovesné vločky
      { ingredientId: 6006, amount: 60 }, // vejce
      { ingredientId: 6005, amount: 120 }, // mléko 1.5 %
      { ingredientId: 6001, amount: 120 }, // polotučný tvaroh
      { ingredientId: 2006, amount: 150 }, // lesní ovoce
      { ingredientId: 8004, amount: 8 }, // med
      { ingredientId: 8001, amount: 3 }, // olivový olej (na opečení)
    ],
  },
  {
    id: 87,
    title: 'Špenátové muffiny',
    type: 'snack1',
    calories: 144,
    kj: 602,
    proteins: 10.8,
    carbohydrates: 16.9,
    fats: 4.1,
    ingredients: [
      { ingredientId: 3017, amount: 90 }, // špenát
      { ingredientId: 6006, amount: 50 }, // vejce
      { ingredientId: 1003, amount: 25 }, // pšeničná mouka
      { ingredientId: 6024, amount: 60 }, // cottage
      { ingredientId: 8001, amount: 2 }, // olivový olej
    ],
  },
  {
    id: 88,
    title: 'Hovězí směs na asijský způsob, rýžové nudle',
    type: 'lunch',
    calories: 430,
    kj: 1799,
    proteins: 33.4,
    carbohydrates: 48.6,
    fats: 11.2,
    ingredients: [
      { ingredientId: 5003, amount: 120 }, // hovězí libové
      { ingredientId: 4010, amount: 180 }, // rýžové nudle
      { ingredientId: 3010, amount: 250 }, // zeleninový mix
      { ingredientId: 8001, amount: 6 }, // olivový olej
      { ingredientId: 9011, amount: 3 }, // asijská směs koření
    ],
  },
  {
    id: 89,
    title: 'Budapešťská pomazánka',
    type: 'snack2',
    calories: 145,
    kj: 607,
    proteins: 15.1,
    carbohydrates: 14.7,
    fats: 3.1,
    ingredients: [
      { ingredientId: 6001, amount: 120 }, // polotučný tvaroh
      { ingredientId: 3004, amount: 30 }, // cibule
      { ingredientId: 9010, amount: 2 }, // mletá paprika
      { ingredientId: 7009, amount: 20 }, // knäckebrot
    ],
  },
  {
    id: 90,
    title: 'Pečený paprikový lusk s bramborem',
    type: 'dinner',
    calories: 358,
    kj: 1498,
    proteins: 8.1,
    carbohydrates: 54.2,
    fats: 12.1,
    ingredients: [
      { ingredientId: 3018, amount: 300 }, // paprika (lusk)
      { ingredientId: 4001, amount: 260 }, // brambory vařené
      { ingredientId: 8001, amount: 8 }, // olivový olej
      { ingredientId: 6004, amount: 80 }, // jogurt bílý (dip)
    ],
  },
];
