import { UploadButtonSmallStyled } from '../styles/uploadSmallStyles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

interface UploadButtonSmallProps {
  icon: 'Camera' | 'File';
}

export const UploadButtonSmall = ({ icon }: UploadButtonSmallProps) => {
  return (
    <UploadButtonSmallStyled htmlFor={`upload${icon}`}>
      {icon === 'Camera' && (
        <CameraAltIcon color="primary" sx={{ fontSize: 25 }} />
      )}
      {icon === 'File' && (
        <DriveFolderUploadIcon color="primary" sx={{ fontSize: 25 }} />
      )}
    </UploadButtonSmallStyled>
  );
};
