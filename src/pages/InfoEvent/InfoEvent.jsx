import ButtonBack from '../../components/ButtonBack/ButtonBack';
import CardInfoEvent from '../../components/CardInfoEvent/CardInfoEvent';
import { Container, TitleInfo } from './InfoEvent.styled';
import { useLocation } from 'react-router-dom';
const InfoEvent = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <Container>
      <ButtonBack />

      <TitleInfo>Galery Opening</TitleInfo>
      <CardInfoEvent event={location.state} />
    </Container>
  );
};

export default InfoEvent;
