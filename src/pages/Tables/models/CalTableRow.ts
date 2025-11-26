export type CalTablesRow = {
  OrigFdCd: number; //id
  OrigFdNm: string; //name
  ENERC: number; //calories
  FAT: number; //fat
  CHOT: number; //carbs
  PROT: number; //protein
  EngFdNam?: string;
  SciNam?: string;
  EDIBLE?: string | number;
  NCF?: string | number;
  FACF?: string | number;
  FASAT?: string | number;
  FAMS?: string | number;
  FAPU?: string | number;
  FATRN?: string | number;
  CHO?: string | number;
  SUGAR?: string | number;
  FIBT?: string | number;
  ASH?: string | number;
  NA?: string | number;
  NACL?: string | number;
  WATER?: string | number;
};
