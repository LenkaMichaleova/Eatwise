import { UploadButtonLargeStyled } from '../styles/uploadLargeStyles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

interface UploadButtonLargeProps {
  icon: 'Camera' | 'File';
  text: string;
}

export const UploadButtonLarge = ({ icon, text }: UploadButtonLargeProps) => {
  return (
    <UploadButtonLargeStyled htmlFor={`upload${icon}`}>
      {icon === 'Camera' && (
        <CameraAltIcon color="primary" sx={{ fontSize: 30 }} />
      )}
      {icon === 'File' && (
        <DriveFolderUploadIcon color="primary" sx={{ fontSize: 30 }} />
      )}
      <span>{text}</span>
    </UploadButtonLargeStyled>
  );
};
