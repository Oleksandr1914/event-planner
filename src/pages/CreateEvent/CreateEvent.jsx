import ButtonBack from '../../components/ButtonBack/ButtonBack';
import FormEvent from '../../components/From/FormEvent';
import { CreateContainer, TitleCreat } from './CreateEvent.styled';

const CreateEvent = () => {
  return (
    <CreateContainer>
      <ButtonBack />
      <TitleCreat>Create new event</TitleCreat>
      <FormEvent />
    </CreateContainer>
  );
};

export default CreateEvent;
