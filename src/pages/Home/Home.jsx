import { useState } from 'react';
import { ButtonAdd } from '../../components/ButtonAddEvent/ButtonAddEvent.styled';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import SelectSort from '../../components/SelectSort/SelectSort';
import { Container, EventBlock, FilterBlock, Title } from './Home.styled';
import CartEvent from '../../components/CardEvent/CardEvent';

const Home = () => {
  const [isActiveSort, setIsActiveSort] = useState(false);
  const [isActiveCategory, setIsActiveCategory] = useState(false);

  return (
    <Container>
      <FilterBlock>
        <SelectCategory
          isActiveCategory={isActiveCategory}
          setIsActiveCategory={setIsActiveCategory}
          isActiveSort={isActiveSort}
        />
        <SelectSort
          isActiveSort={isActiveSort}
          setIsActiveSort={setIsActiveSort}
          isActiveCategory={isActiveCategory}
        />
        <ButtonAdd />
      </FilterBlock>
      <EventBlock>
        <Title>My events</Title>
        <CartEvent />
      </EventBlock>
    </Container>
  );
};

export default Home;
