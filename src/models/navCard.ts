export const NavCardTypes = {
  database: 'Databáze jídel',
  menu: 'Jídelníček',
  calories: 'Kalorické tabulky',
  photo: 'Vyfoť jídlo',
} as const;

export type NavCardType = (typeof NavCardTypes)[keyof typeof NavCardTypes];
