import { Link, useParams } from 'react-router-dom';
import { foodData } from '../../foodData';
import { DetailCard } from '../../components/DetailCard';
import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ROUTES } from '../../constants/routes';

export const DatabaseDetail = () => {
  const { databaseId } = useParams<{ databaseId: string }>();
  const foodItem = foodData.find((food) => food.id === Number(databaseId));

  return (
    <>
      <Button
        component={Link}
        to={ROUTES.database}
        sx={{ margin: '2rem 0 0 0' }}
      >
        <ArrowBackIcon fontSize="large" />
      </Button>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <DetailCard data={foodItem} />
      </Box>
    </>
  );
};
