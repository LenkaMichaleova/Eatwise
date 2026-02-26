import {
  CalTablesBoxHeaderStyled,
  CalTablesContentStyled,
  CalTablesHeaderStyled,
  CalTablesStyled,
} from './styles/calTablesStyles';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { getAllIngredients } from '../../services/ingredientsService';
import { IngredientCard } from './components/IngredientCard';
import { SearchBarBoxStyled } from '../Database/styles/SearchBarStyles';

export const Tables = () => {
  const ingredientData = getAllIngredients();

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
        {ingredientData.map((ingredient) => (
          <IngredientCard key={ingredient.id} data={ingredient} />
        ))}
      </CalTablesContentStyled>
    </CalTablesStyled>
  );
};
