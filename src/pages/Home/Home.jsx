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
import { useEventStore, useSearch } from '../../store';
// import { Pagination } from 'antd';

const Home = () => {
  const [isActiveSort, setIsActiveSort] = useState(false);
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [isCategory, setIsCategory] = useState('');

  // const [current, setCurrent] = useState(1);

  const { eventData } = useEventStore(state => ({
    eventData: state.eventData,
  }));
  const search = useSearch(state => state.search);
  // const onChange = page => {
  //   console.log(page);
  //   setCurrent(page);
  // };

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
              .filter(
                el =>
                  el.title.toLowerCase().includes(search) ||
                  el.description.toLowerCase().includes(search)
              )
              .map(el => <CardEvent event={el} key={el.id} />)
          : eventData
              .filter(
                el =>
                  el.title.toLowerCase().includes(search) ||
                  el.description.toLowerCase().includes(search)
              )
              .map(el => <CardEvent event={el} key={el.id} />)}
      </EventBlock>
      {/* <Pagination
        defaultCurrent={1}
        current={current}
        onChange={onChange}
        total={150}
        showSizeChanger={false}
      /> */}
      <Outlet />
    </Container>
  );
};

export default Home;
