import { ButtonGoBack } from './ButtonBack.styled';
import Back from '../../assets/back.svg';

const ButtonBack = ({ go, state }) => {
  return (
    <ButtonGoBack to={go} state={state}>
      <img src={Back} alt="arrow" />
      <span>Back</span>
    </ButtonGoBack>
  );
};

export default ButtonBack;
