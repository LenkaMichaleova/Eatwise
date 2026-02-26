import {
  CalTablesBoxHeaderStyled,
  CalTablesContentStyled,
  CalTablesHeaderStyled,
  CalTablesStyled,
} from './styles/calTablesStyles';
import { SearchBarBoxStyled } from '../Database/styles/SearchBarStyles';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { getAllIngredients } from '../../services/ingredientsService';
import { IngredientCard } from './components/IngredientCard';

export const Tables = () => {
  const ingredientData = getAllIngredients();
  const sortedIngredientData = [...ingredientData].sort((a, b) =>
    a.name.localeCompare(b.name, 'cs')
  );

  return (
    <CalTablesStyled>
      <CalTablesHeaderStyled>
        <SectionTitle title="Kalorické tabulky (na 100g)" />
      </CalTablesHeaderStyled>

      <CalTablesBoxHeaderStyled>
        <SearchBarBoxStyled>
          {/* <IngredientSearchBar />
          <IngredientFilterBar /> */}
        </SearchBarBoxStyled>
        {/* <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ p: { xs: 1, sm: 2 } }}
            onClick={() => setIsDialogOpen(true)}
          >
            <Typography
              variant="subtitle2"
              color="secondary"
            >{`Přidat ingredienci`}</Typography>
          </Button>
        </Box> */}
      </CalTablesBoxHeaderStyled>

      <CalTablesContentStyled>
        {sortedIngredientData.map((ingredient) => (
          <IngredientCard key={ingredient.id} data={ingredient} />
        ))}
      </CalTablesContentStyled>
    </CalTablesStyled>
  );
};
