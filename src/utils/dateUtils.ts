import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/cs';

dayjs.extend(isoWeek);
dayjs.locale('cs');

export const getWeekRange = (date: Dayjs): { start: Dayjs; end: Dayjs } => {
  const start = date.startOf('isoWeek');
  const end = date.endOf('isoWeek');
  return { start, end };
};

export const formatDate = (date: Dayjs): string => {
  return date.format('DD.MM.YYYY');
};

export const formatWeekday = (date: Dayjs): string => {
  return date.format('dddd');
};

export const formatDateKey = (date: Dayjs): string => {
  return date.format('YYYY-MM-DD');
};

export const formatShortDate = (date: Dayjs): string => {
  return date.format('DD.MM');
};

export const formatMonthYear = (date: Dayjs): string => {
  return date.format('MMMM YYYY');
};
