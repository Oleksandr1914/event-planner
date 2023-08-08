import useEventStore from '../../store';
import { ButtonDelete } from './ButtonDeleteEvent.styled';

const ButtonDeleteEvent = ({ idEvent }) => {
  const { deleteEvent } = useEventStore(state => ({
    deleteEvent: state.deleteEvent,
  }));

  return (
    <ButtonDelete to="/" onClick={() => deleteEvent(idEvent)}>
      Delete event
    </ButtonDelete>
  );
};

export default ButtonDeleteEvent;
