import { useState } from 'react';
import { Box, Button, Popper, Paper, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Dayjs } from 'dayjs';
import {
  formatDate,
  formatShortDate,
  formatMonthYear,
} from '../../../utils/dateUtils';
import { WeekCalendarHeaderStyled } from '../styles/weekCalendarStyles';

interface WeekPickerProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
}

export const WeekPicker = ({ value, onChange }: WeekPickerProps) => {
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);
  const [displayMonth, setDisplayMonth] = useState<Dayjs>(value);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const open = Boolean(anchor);

  const getMonthWeeks = (date: Dayjs): Dayjs[][] => {
    const monthStart = date.startOf('month');
    const monthEnd = date.endOf('month');
    const firstWeekStart = monthStart.startOf('isoWeek');
    const lastWeekEnd = monthEnd.endOf('isoWeek');
    const weeks: Dayjs[][] = [];

    let currentDate = firstWeekStart;
    while (
      currentDate.isBefore(lastWeekEnd) ||
      currentDate.isSame(lastWeekEnd)
    ) {
      const week: Dayjs[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(currentDate);
        currentDate = currentDate.add(1, 'day');
      }
      weeks.push(week);
    }

    return weeks;
  };

  const selectWeek = (date: Dayjs) => {
    onChange(date);
    handleClose();
  };

  const weeks = getMonthWeeks(displayMonth);
  const currentWeekStart = value.startOf('isoWeek');

  return (
    <>
      <TextField
        size="small"
        label="Vyberte týden"
        value={`${formatDate(value.startOf('isoWeek'))} - ${formatDate(value.endOf('isoWeek'))}`}
        onClick={handleClick}
        onFocus={(event) => event.target.blur()}
        InputProps={{
          readOnly: true,
        }}
        sx={{ width: 220, cursor: 'pointer' }}
      />
      <Popper open={open} anchorEl={anchor} placement="bottom-end">
        <Paper elevation={3} sx={{ p: 2, minWidth: 350 }}>
          <WeekCalendarHeaderStyled>
            <Button
              size="small"
              onClick={() => setDisplayMonth(displayMonth.subtract(1, 'month'))}
            >
              <ChevronLeftIcon />
            </Button>
            <Typography
              variant="subtitle2"
              sx={{ minWidth: 150, textAlign: 'center' }}
            >
              {formatMonthYear(displayMonth)}
            </Typography>
            <Button
              size="small"
              onClick={() => setDisplayMonth(displayMonth.add(1, 'month'))}
            >
              <ChevronRightIcon />
            </Button>
          </WeekCalendarHeaderStyled>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {weeks.map((week, weekIndex) => {
              const weekStart = week[0];
              const weekEnd = week[6];
              const isCurrentWeek = weekStart.isSame(currentWeekStart, 'day');

              return (
                <Button
                  key={`${weekIndex}`}
                  fullWidth
                  onClick={() => selectWeek(weekStart)}
                  variant={isCurrentWeek ? 'contained' : 'outlined'}
                  sx={{
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    py: 1,
                  }}
                >
                  <Typography variant="body2">
                    {`Týden ${weekStart.isoWeek()}`}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    {formatShortDate(weekStart)} - {formatShortDate(weekEnd)}
                  </Typography>
                </Button>
              );
            })}
          </Box>
        </Paper>
      </Popper>
    </>
  );
};
