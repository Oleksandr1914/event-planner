import { useEffect, useRef } from 'react';
import {
  ItemBody,
  Select,
  SelectBody,
  TextSelector,
  TextSort,
} from './SelectSort.styled';
import Up from '../../assets/up.svg';
import Down from '../../assets/down.svg';
import { useSearch } from '../../store';

const SelectSort = ({ isActiveSort, setIsActiveSort, isActiveCategory }) => {
  const editSort = useSearch(state => state.editSort);

  const btnRef = useRef();

  const arraySort = [
    { id: 1, name: 'by name', image: Up, sortBy: 'nameUp' },
    { id: 2, name: 'by name', image: Down, sortBy: 'nameDown' },
    { id: 3, name: 'by date', image: Up, sortBy: 'dateUp' },
    { id: 4, name: 'by date', image: Down, sortBy: 'dateDown' },
    { id: 5, name: 'by priority', image: Up, sortBy: 'priorityUp' },
    { id: 6, name: 'by priority', image: Down, sortBy: 'priorityDown' },
  ];

  const selectHandler = () => {
    setIsActiveSort(!isActiveSort);
  };

  const onItemBody = element => {
    editSort(element);
    setIsActiveSort(!isActiveSort);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsActiveSort(false);
      }
    };

    const handleBodyClick = e => {
      if (e.target !== btnRef.current) {
        setIsActiveSort(false);
      }
    };

    if (isActiveSort) {
      body.addEventListener('click', handleBodyClick);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      body.removeEventListener('click', handleBodyClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActiveSort]);

  return (
    <Select
      ref={btnRef}
      type={isActiveCategory ? 'sort' : ''}
      className={isActiveSort && 'active'}
      onClick={selectHandler}
    >
      <TextSort>Sort by</TextSort>
      {isActiveSort && <TextSelector>Sort by</TextSelector>}
      {isActiveSort && (
        <SelectBody>
          {arraySort.map(el => (
            <ItemBody key={el.id} onClick={() => onItemBody(el.sortBy)}>
              <span>{el.name}</span>
              <img src={el.image} alt="arrow" />
            </ItemBody>
          ))}
        </SelectBody>
      )}
    </Select>
  );
};

export default SelectSort;
