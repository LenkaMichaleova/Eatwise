import { UploadWrapperLargeStyled } from '../styles/uploadLargeStyles';
import { UploadButtonLarge } from './UploadButtonLarge';

interface UploadLargeProps {
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadLarge = ({ onImageChange }: UploadLargeProps) => {
  return (
    <UploadWrapperLargeStyled>
      <UploadButtonLarge icon="Camera" text="Vyfoť jídlo" />
      <input
        hidden
        id="uploadCamera"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={onImageChange}
      />

      <UploadButtonLarge icon="File" text="Nahraj jídlo" />
      <input
        hidden
        id="uploadFile"
        type="file"
        accept="image/*"
        onChange={onImageChange}
      />
    </UploadWrapperLargeStyled>
  );
};
