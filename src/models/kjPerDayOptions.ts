export const kjPerDayOptions = [
  { value: 6000, label: '6000' },
  { value: 7000, label: '7000' },
  { value: 8000, label: '8000' },
  { value: 9000, label: '9000' },
  { value: 10000, label: '10000' },
] as const;

export type KjPerDayValue = (typeof kjPerDayOptions)[number]['value'];

export const DEFAULT_KJ_PER_DAY: KjPerDayValue = 6000;
