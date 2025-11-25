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

// TODO 1:
// good job thinking about form id/htmlFor 👍 on the other hand there is no connection between real id and html for. so in case you change id=uploadCamera to id=newUploadCameraId, this is going to fail. another note. if you think about it the button and input belong to each other. so if you move the input inside of the Button component, youll solve the first problem


// TODO 2:
// another comment 😄 you can keep it as is. but in long term. imagine you need to have 10 other icons here. dont ask me which ones, you'll simply need it. would you have 12 ifs down bellow? No. the simplest way is to convert icon to icon: ReactNode and use it as <UploadButtonSmall icon={<CameraAltIcon color="primary" sx={{ fontSize: 25 }} />} /> etc. what do you think about it?
// combined with the comment bellow the component looks like this

// import { UploadButtonSmallStyled } from '../styles/uploadSmallStyles';
// import type { ReactNode, ChangeEvent } from 'react';

// interface UploadButtonSmallProps {
//   icon: ReactNode;
//   onImageChange:  (e: ChangeEvent<HTMLInputElement>) => void;
// }

// export const UploadButtonSmall = ({ icon, onImageChange }: UploadButtonSmallProps) => {
//   const name = Math.random().toString(36).substring(2); // any other way to generate some ID or pass it as prop as well
//   return (
//     <UploadButtonSmallStyled htmlFor={name}>
//       {icon}
//       <input
//         hidden
//         id={name}
//         type="file"
//         accept="image/*"
//         capture="environment"
//         onChange={onImageChange}
//       />
//     </UploadButtonSmallStyled>
//   );
// };
