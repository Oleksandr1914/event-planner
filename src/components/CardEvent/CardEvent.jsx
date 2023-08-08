import { useEffect, useState } from 'react';
import {
  BlockLocationAndTime,
  BlockTitle,
  BottomOfTheCard,
  CategoryBox,
  CategoryText,
  ContainerCard,
  DataTimeText,
  DescriptionCard,
  ImageCard,
  LocationText,
  PriorityText,
  TitleCard,
} from './CardEvent.styled';
import Art from '../../assets/image-event/art.png';
import Conference from '../../assets/image-event/conference.png';
import Workshop from '../../assets/image-event/workshop.png';
import Party from '../../assets/image-event/party.png';
import Business from '../../assets/image-event/business.png';
import WorkshopSecond from '../../assets/image-event/workshop2.png';
import Music from '../../assets/image-event/music.png';
import Sport from '../../assets/image-event/sport.png';
import Default from '../../assets/image-event/default.png';
import ButtonMoreInfo from '../ButtonMoreInfo/ButtonMoreInfo';

const CardEvent = ({ event }) => {
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
      <CategoryBox>
        <CategoryText>{event.category}</CategoryText>
        <PriorityText type={event.priority}>{event.priority}</PriorityText>
      </CategoryBox>
      <BottomOfTheCard>
        <BlockLocationAndTime>
          <DataTimeText>
            <span>{event.date} </span>
            at
            <span> {event.time}</span>
          </DataTimeText>
          <LocationText>{event.location}</LocationText>
        </BlockLocationAndTime>
        <BlockTitle>
          <TitleCard>{event.title}</TitleCard>
          <DescriptionCard>{event.description}</DescriptionCard>

          <ButtonMoreInfo event={event} />
        </BlockTitle>
      </BottomOfTheCard>
    </ContainerCard>
  );
};

export default CardEvent;
