import { useLocation } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import FormEvent from '../../components/From/FormEvent';
import { EditContainer, TitleEdit } from './EditEvent.styled';

const EditEvent = () => {
  const locationUse = useLocation();
  const { category, date, description, location, priority, time, title, id } =
    locationUse.state;

  return (
    <EditContainer>
      <ButtonBack go={'/info-event'} state={locationUse.state} />
      <TitleEdit>Edit event</TitleEdit>
      <FormEvent
        title={title}
        description={description}
        location={location}
        date={new Date(date)}
        time={time}
        category={category}
        priority={priority}
        id={id}
        pathname={location.pathname}
      />
    </EditContainer>
  );
};

export default EditEvent;
