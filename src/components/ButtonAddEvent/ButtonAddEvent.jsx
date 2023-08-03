import { ButtonAdd } from './ButtonAddEvent.styled';

const ButtonAddEvent = () => {
  return <ButtonAdd>{false && <span>Add new event</span>}</ButtonAdd>;
};

export default ButtonAddEvent;
