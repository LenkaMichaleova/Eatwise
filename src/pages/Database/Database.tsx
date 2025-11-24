import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import { Button } from '@mui/material';
import { SectionTitle } from '../../components/SectionTitle';
import { DatabaseTable } from './components/DatabaseTable';
import { DatabaseBoxSmall } from './components/DatabaseBoxSmall';
import { DatabaseHeaderStylled, DatabaseStyled } from './styles/DatabaseStyles';

export const Database = () => {
  return (
    <DatabaseStyled>
      <DatabaseHeaderStylled>
        <SectionTitle title="Databáze jídel" />
        <Button>
          <FilterListAltIcon fontSize="large" />
        </Button>
      </DatabaseHeaderStylled>
      <DatabaseBoxSmall />
      {/* TODO handle responsivity here (using e.g. Box) rather than styling components */}
      {/* <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
        <DatabaseBoxSmall />
      </Box>
      <Box sx={{ display: { sm: 'none', md: 'block' } }}>
        <DatabaseTable />
      </Box> */}
      <DatabaseTable />
    </DatabaseStyled>
  );
};
