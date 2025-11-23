function createData(
  id: number,
  name: string,
  type: 'snídaně' | 'svačina' | 'oběd' | 'večeře',
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { id, name, type, calories, fat, carbs, protein };
}

export const rows = [
  createData(
    1,
    'Vajíčka na másle s celozrným chlebem',
    'snídaně',
    159,
    6.0,
    24,
    4.0
  ),
  createData(2, 'Tvaroh s ovocem', 'svačina', 237, 9.0, 37, 4.3),
  createData(
    3,
    'Hovězí svíčková na smetaně s knedlíkem',
    'oběd',
    262,
    16.0,
    24,
    6.0
  ),
  createData(
    4,
    'Guláš s hovězím masem a jasmínovou rýží',
    'oběd',
    305,
    3.7,
    67,
    4.3
  ),
  createData(5, 'Kuřecí plátek na zelenině', 'večeře', 356, 16.0, 49, 3.9),
];
