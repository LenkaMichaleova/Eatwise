import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import { Box, Button } from '@mui/material';
import { CalTablesHeaderStylled, CalTablesStyled } from './styles/calTablesStyles';
import { SectionTitle } from '../../components/SectionTitle';
import { CalTablesBoxSmall } from './components/CalTablesBoxSmall';
import { CalTablesTable } from './components/CalTablesTable';
import { getAllIngredients } from '../../services/ingredientsService';

export function Tables() {
  const tableData = getAllIngredients();
  
  return (
    <CalTablesStyled>
      <CalTablesHeaderStylled>
        <SectionTitle title="Kalorické tabulky" />
        <Button>
          <FilterListAltIcon fontSize="large" />
        </Button>
      </CalTablesHeaderStylled>
      <Box sx={{ display: { sm: 'flex', md: 'none' }, width: '100%' }}>
        <CalTablesBoxSmall data={tableData} />
      </Box>
      <Box sx={{ display: { sm: 'none', md: 'block' }, width: '100%' }}>
        <CalTablesTable data={tableData} />
      </Box>
    </CalTablesStyled>
  );
}
