import { MealCard } from './MealCard';
import { UploadLarge } from './UploadLarge';
import { Box } from '@mui/material';
import { UploadSmall } from './UploadSmall';
import { uploadBoxStyles } from '../styles/uploadStyles';
import { useMealReaderControler } from '../hooks/useMealReaderControler';

export const MealReader = () => {
  const { result, image, loading, error, handleImageChange } =
    useMealReaderControler();

  return (
    <Box sx={{ alignSelf: 'center' }}>
      <Box sx={uploadBoxStyles}>
        <MealCard data={result} image={image} loading={loading} error={error} />
        {!image ? (
          <UploadLarge onImageChange={handleImageChange} />
        ) : (
          <UploadSmall onImageChange={handleImageChange} />
        )}
      </Box>
    </Box>
  );
};
