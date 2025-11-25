import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import { Box, Button } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';
import { DatabaseTable } from './components/DatabaseTable';
import { DatabaseBoxSmall } from './components/DatabaseBoxSmall';
import { DatabaseHeaderStylled, DatabaseStyled } from './styles/DatabaseStyles';
import { getAllMeals } from '../../services/mealsService';

export const Database = () => {
  const tableData = getAllMeals();

  return (
    <DatabaseStyled>
      <DatabaseHeaderStylled>
        <SectionTitle title="Databáze jídel" />
        <Button>
          <FilterListAltIcon fontSize="large" />
        </Button>
      </DatabaseHeaderStylled>
      <Box sx={{ display: { sm: 'flex', md: 'none' }, width: '100%' }}>
        <DatabaseBoxSmall data={tableData} />
      </Box>
      <Box sx={{ display: { sm: 'none', md: 'block' }, width: '100%' }}>
        <DatabaseTable data={tableData} />
      </Box>
    </DatabaseStyled>
  );
};
