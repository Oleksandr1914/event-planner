import { useLocation } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import FormEvent from '../../components/From/FormEvent';
import { CreateContainer, TitleCreat } from './CreateEvent.styled';

const CreateEvent = () => {
  const location = useLocation();

  return (
    <CreateContainer>
      <ButtonBack go={'/'} />
      <TitleCreat>Create new event</TitleCreat>
      <FormEvent
        title={''}
        description={''}
        location={''}
        date={new Date()}
        time={'12:00'}
        category={''}
        priority={''}
        id={''}
        pathname={location.pathname}
      />
    </CreateContainer>
  );
};

export default CreateEvent;
