import { UploadWrapperSmallStyled } from '../styles/uploadSmallStyles';
import { UploadButtonSmall } from './UploadButtonSmall';

interface UploadSmallProps {
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadSmall = ({ onImageChange }: UploadSmallProps) => {
  return (
    <UploadWrapperSmallStyled>
      <UploadButtonSmall icon="Camera" />
      <input
        hidden
        id="uploadCamera"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={onImageChange}
      />

      <UploadButtonSmall icon="File" />
      <input
        hidden
        id="uploadFile"
        type="file"
        accept="image/*"
        onChange={onImageChange}
      />
    </UploadWrapperSmallStyled>
  );
};
