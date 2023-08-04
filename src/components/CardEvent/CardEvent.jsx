import { useEffect, useState } from 'react';
import {
  BlockLocationAndTime,
  BlockTitle,
  BottomOfTheCard,
  CardHover,
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
import ButtonMoreInfo from '../ButtonMoreInfo/ButtonMoreInfo';

const CartEvent = ({ event }) => {
  const [pictur, setPecture] = useState(null);

  // const event = {
  //   title: 'Galery Opening',
  //   description:
  //     'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
  //   data: '12.07',
  //   time: '12:00',
  //   location: 'Kyiv',
  //   category: 'Art',
  //   picture: 'Art',
  //   priority: 'High',
  // };

  useEffect(() => {
    switch (event.picture) {
      case 'Art':
        console.log(event.picture);
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
    }
  }, []);

  return (
    <ContainerCard>
      <CardHover href="#" onClick={e => e.preventDefault()}>
        <ImageCard src={pictur} alt="event picture" />
        <CategoryBox>
          <CategoryText>{event.category}</CategoryText>
          <PriorityText>{event.priority}</PriorityText>
        </CategoryBox>
        <BottomOfTheCard>
          <BlockLocationAndTime>
            <DataTimeText>
              <span>{event.data} </span>
              at
              <span> {event.time}</span>
            </DataTimeText>
            <LocationText>{event.location}</LocationText>
          </BlockLocationAndTime>
          <BlockTitle>
            <TitleCard>{event.title}</TitleCard>
            <DescriptionCard>{event.description}</DescriptionCard>

            <ButtonMoreInfo />
          </BlockTitle>
        </BottomOfTheCard>
      </CardHover>
    </ContainerCard>
  );
};

export default CartEvent;
