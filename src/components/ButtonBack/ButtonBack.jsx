import { ButtonGoBack } from './ButtonBack.styled';
import Back from '../../assets/back.svg';

const ButtonBack = () => {
  return (
    <ButtonGoBack to="/">
      <img src={Back} alt="arrow" />
      <span>Back</span>
    </ButtonGoBack>
  );
};

export default ButtonBack;
