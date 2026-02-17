import { Link, useParams } from 'react-router-dom';
import { foodData } from '../../foodData';
import { DetailCard } from './components/DetailCard';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ROUTES } from '../../constants/routes';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {
  DatabaseDetailErrorBoxStyled,
  DatabaseDetailHeaderStyled,
} from './styles/databaseDetailStyles';

export const DatabaseDetail = () => {
  const { databaseId } = useParams<{ databaseId: string }>();
  const foodItem = foodData.find((food) => food.id === Number(databaseId));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <DatabaseDetailHeaderStyled>
        <Tooltip title="Zpět na databázi jídel" placement="right">
          <IconButton
            color="primary"
            component={Link}
            to={ROUTES.database}
            sx={{ margin: '2rem 0 0 0' }}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Typography variant="h2" color="primary">
          {`Detail jídla`}
        </Typography>
      </DatabaseDetailHeaderStyled>

      {!foodItem && (
        <DatabaseDetailErrorBoxStyled>
          <Typography variant="h5" color="primary">
            {`Omlouváme se, položka nebyla nalezena.`}
          </Typography>
          <SentimentVeryDissatisfiedIcon
            color="primary"
            sx={{ fontSize: '4rem', marginLeft: 2 }}
          />
        </DatabaseDetailErrorBoxStyled>
      )}

      <Box sx={{ width: '100%', display: 'flex' }}>
        {foodItem && (
          <Box sx={{ width: '100%', display: 'flex' }}>
            <DetailCard data={foodItem} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
