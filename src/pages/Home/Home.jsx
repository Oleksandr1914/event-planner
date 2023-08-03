import { useState } from 'react';
import { ButtonAdd } from '../../components/ButtonAddEvent/ButtonAddEvent.styled';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import SelectSort from '../../components/SelectSort/SelectSort';
import { Container, FilterBlock } from './Home.styled';

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
      <div>Home</div>
    </Container>
  );
};

export default Home;
