import ButtonBack from '../../components/ButtonBack/ButtonBack';
import CardInfoEvent from '../../components/CardInfoEvent/CardInfoEvent';
import { BoxTitleCard, Container, TitleInfo } from './InfoEvent.styled';
import { useLocation } from 'react-router-dom';

const InfoEvent = () => {
  const location = useLocation();

  return (
    <Container>
      <ButtonBack go={'/'} />
      <BoxTitleCard>
        <TitleInfo>Galery Opening</TitleInfo>
        <CardInfoEvent event={location.state} />
      </BoxTitleCard>
    </Container>
  );
};

export default InfoEvent;
