import labelDinner from '../../assets/label-dinner.png';
import labelLunch from '../../assets/label-lunch.png';
import labelSnack1 from '../../assets/label-snack1.png';
import labelSnack2 from '../../assets/label-snack2.png';
import labelBreakfast from '../../assets/label-breakfast.png';

export const IconLabel = ({ type }: { type: string }) => {
  return (
    <>
      {type === 'dinner' && <img width="50px" src={labelDinner} alt="Dinner" />}
      {type === 'lunch' && <img width="50px" src={labelLunch} alt="Lunch" />}
      {type === 'snack1' && (
        <img width="50px" src={labelSnack1} alt="Snack 1" />
      )}
      {type === 'snack2' && (
        <img width="50px" src={labelSnack2} alt="Snack 2" />
      )}
      {type === 'breakfast' && (
        <img width="50px" src={labelBreakfast} alt="Breakfast" />
      )}
    </>
  );
};
