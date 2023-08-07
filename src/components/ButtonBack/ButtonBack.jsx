import { ButtonGoBack } from './ButtonBack.styled';
import Back from '../../assets/back.svg';
import { useNavigate } from 'react-router-dom';

const ButtonBack = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <ButtonGoBack onClick={goBack}>
      <img src={Back} alt="arrow" />
      <span>Back</span>
    </ButtonGoBack>
  );
};

export default ButtonBack;
