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
  const sort = useSearch(state => state.sort);
  // const onChange = page => {
  //   console.log(page);
  //   setCurrent(page);
  // };

  function getPriorityValue(priority) {
    switch (priority) {
      case 'High':
        return 1;
      case 'Medium':
        return 2;
      case 'Low':
        return 3;
      default:
        return 0; // Не визначено, розташувати в кінці
    }
  }

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
              .sort((a, b) => {
                if (sort === 'nameUp') {
                  return a.title.localeCompare(b.title);
                } else if (sort === 'nameDown') {
                  return b.title.localeCompare(a.title);
                } else if (sort === 'priorityUp') {
                  return (
                    getPriorityValue(a.priority) - getPriorityValue(b.priority)
                  );
                } else if (sort === 'priorityDown') {
                  return (
                    getPriorityValue(b.priority) - getPriorityValue(a.priority)
                  );
                } else if (sort === 'dateUp') {
                  return new Date(a.date) - new Date(b.date);
                } else if (sort === 'dateDown') {
                  return new Date(b.date) - new Date(a.date);
                }
              })
              .filter(el => el.category === isCategory)
              .filter(
                el =>
                  el.title.toLowerCase().includes(search) ||
                  el.description.toLowerCase().includes(search)
              )
              .map(el => <CardEvent event={el} key={el.id} />)
          : eventData
              .sort((a, b) => {
                if (sort === 'nameUp') {
                  return a.title.localeCompare(b.title);
                } else if (sort === 'nameDown') {
                  return b.title.localeCompare(a.title);
                } else if (sort === 'priorityUp') {
                  return (
                    getPriorityValue(a.priority) - getPriorityValue(b.priority)
                  );
                } else if (sort === 'priorityDown') {
                  return (
                    getPriorityValue(b.priority) - getPriorityValue(a.priority)
                  );
                } else if (sort === 'dateUp') {
                  return (
                    new Date(a.date + ' ' + a.time) -
                    new Date(b.date + ' ' + b.time)
                  );
                } else if (sort === 'dateDown') {
                  return (
                    new Date(b.date + ' ' + b.time) -
                    new Date(a.date + ' ' + a.time)
                  );
                }
              })
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
