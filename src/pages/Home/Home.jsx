import { useState } from 'react';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import SelectSort from '../../components/SelectSort/SelectSort';
import {
  ButtonAdd,
  Container,
  EventBlock,
  FilterBlock,
  Title,
} from './Home.styled';
import CardEvent from '../../components/CardEvent/CardEvent';
import { Outlet } from 'react-router-dom';
import useEventStore from '../../store';

const Home = () => {
  const [isActiveSort, setIsActiveSort] = useState(false);
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [isCategory, setIsCategory] = useState('');

  const { eventData } = useEventStore(state => ({
    eventData: state.eventData,
  }));

  return (
    <Container>
      <FilterBlock>
        <SelectCategory
          isActiveCategory={isActiveCategory}
          setIsActiveCategory={setIsActiveCategory}
          isActiveSort={isActiveSort}
          isCategory={isCategory}
          setIsCategory={setIsCategory}
        />
        <SelectSort
          isActiveSort={isActiveSort}
          setIsActiveSort={setIsActiveSort}
          isActiveCategory={isActiveCategory}
        />
        <ButtonAdd to="/create-event" />
      </FilterBlock>
      <EventBlock>
        <Title>My events</Title>
        {isCategory !== ''
          ? eventData
              .filter(el => el.category === isCategory)
              .map(el => <CardEvent event={el} key={el.id} />)
          : eventData.map(el => <CardEvent event={el} key={el.id} />)}
      </EventBlock>
      <Outlet />
    </Container>
  );
};

export default Home;
