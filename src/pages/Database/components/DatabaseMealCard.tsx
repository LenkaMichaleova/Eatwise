import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from '@mui/material';
import { IconLabel } from '../../../components/IconLabel/IconLabel';
import type { FoodType } from '../../../foodData';
import { generatePath, Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

interface MealProps {
  id: number;
  name: string;
  type: FoodType;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface DatabaseMealCardProps {
  data: MealProps;
}

export const DatabaseMealCard = ({ data }: DatabaseMealCardProps) => {
  const { id, name, type, calories, protein, carbs, fat } = data;
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: '270px',
        alignSelf: 'center',
        '@media (min-width: 600px)': {
          maxWidth: 'none',
        },
      }}
    >
      <CardActionArea
        component={Link}
        to={generatePath(ROUTES.databaseDetail, {
          databaseId: id.toString(),
        })}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <CardHeader
          sx={{ alignSelf: 'start', flex: 1, alignItems: 'flex-start' }}
          title={
            <Box>
              <Typography
                variant="body2"
                color="primary"
                width="80%"
                gutterBottom
              >
                {name}
              </Typography>
              <Box sx={{ position: 'absolute', top: 20, right: 8 }}>
                <IconLabel type={type} />
              </Box>
            </Box>
          }
          subheader={
            <Typography
              variant="caption"
              color="grey.400"
            >{`${calories} kJ / ${Math.round(calories / 4.184)} KCal`}</Typography>
          }
        />
        <CardContent sx={{ mt: -2, width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <Chip
              label={
                <Typography variant="caption">{`Bílkoviny: ${protein}g`}</Typography>
              }
              size="small"
              sx={{
                backgroundColor: '#F5E8EC',
                color: '#6B5E62',
                fontWeight: 500,
              }}
            />
            <Chip
              label={
                <Typography variant="caption">{`Sacharidy: ${carbs}g`}</Typography>
              }
              size="small"
              sx={{
                backgroundColor: '#FFF8E8',
                color: '#6E6A5D',
                fontWeight: 500,
              }}
            />
            <Chip
              label={
                <Typography variant="caption">{`Tuky: ${fat}g`}</Typography>
              }
              size="small"
              sx={{
                backgroundColor: '#E8F2F5',
                color: '#5D676B',
                fontWeight: 500,
              }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
