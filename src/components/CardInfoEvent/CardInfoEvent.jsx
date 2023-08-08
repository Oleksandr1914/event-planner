import {
  BlockTextCard,
  ContainerCard,
  Description,
  ImageCard,
  ItemInfoCategory,
  ListInfoCategory,
  Priority,
} from './CardInfoEvent.styled';
import Art from '../../assets/image-event/art.png';
import Conference from '../../assets/image-event/conference.png';
import Workshop from '../../assets/image-event/workshop.png';
import Party from '../../assets/image-event/party.png';
import Business from '../../assets/image-event/business.png';
import WorkshopSecond from '../../assets/image-event/workshop2.png';
import Music from '../../assets/image-event/music.png';
import Sport from '../../assets/image-event/sport.png';
import Default from '../../assets/image-event/default.png';
import { useEffect, useState } from 'react';
import ButtonDeleteEvent from '../ButtonDeleteEvent/ButtonDeleteEvent';

const CardInfoEvent = ({ event }) => {
  const [pictur, setPecture] = useState(null);

  useEffect(() => {
    switch (event.picture) {
      case 'Art':
        setPecture(Art);
        break;
      case 'Conference':
        setPecture(Conference);
        break;
      case 'Workshop':
        setPecture(Workshop);
        break;
      case 'Party':
        setPecture(Party);
        break;
      case 'Business':
        setPecture(Business);
        break;
      case 'Workshop2':
        setPecture(WorkshopSecond);
        break;
      case 'Music':
        setPecture(Music);
        break;
      case 'Sport':
        setPecture(Sport);
        break;
      case 'Default':
        setPecture(Default);
        break;
    }
  }, [event]);

  return (
    <ContainerCard>
      <ImageCard src={pictur} alt="event picture" />
      <BlockTextCard>
        <Description>{event.description}</Description>
        <ListInfoCategory>
          <ItemInfoCategory>
            <span>{event.category}</span>
          </ItemInfoCategory>
          <ItemInfoCategory>
            <Priority type={event.priority}>{event.priority}</Priority>
          </ItemInfoCategory>
          <ItemInfoCategory>
            <span>{event.location}</span>
          </ItemInfoCategory>
          <ItemInfoCategory>
            <span>{event.data} </span>
            at
            <span> {event.time}</span>
          </ItemInfoCategory>
        </ListInfoCategory>
        <ButtonDeleteEvent idEvent={event.id} />
      </BlockTextCard>
    </ContainerCard>
  );
};

export default CardInfoEvent;
