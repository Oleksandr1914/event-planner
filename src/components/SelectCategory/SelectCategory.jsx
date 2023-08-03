import { useEffect, useRef, useState } from 'react';
import {
  ItemBody,
  Select,
  SelectBody,
  TextSelector,
} from './SelectCategory.styled';

const SelectCategory = ({
  isActiveCategory,
  setIsActiveCategory,
  isActiveSort,
}) => {
  const [value, setValue] = useState('');
  const btnRef = useRef();

  const arrayCategory = [
    'Art',
    'Music',
    'Business',
    'Conference',
    'Workshop',
    'Party',
    'Sport',
  ];

  const selectHandler = () => {
    setIsActiveCategory(!isActiveCategory);
  };

  const onItemBody = element => {
    setValue(element);
    setIsActiveCategory(!isActiveCategory);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsActiveCategory(false);
      }
    };

    const handleBodyClick = e => {
      if (e.target !== btnRef.current) {
        setIsActiveCategory(false);
      }
    };

    if (isActiveCategory) {
      body.addEventListener('click', handleBodyClick);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      body.removeEventListener('click', handleBodyClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActiveCategory]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Select
      ref={btnRef}
      type={isActiveSort ? 'sort' : ''}
      className={isActiveCategory && 'active'}
      onClick={selectHandler}
    >
      {isActiveCategory && <TextSelector>Category</TextSelector>}
      {isActiveCategory && (
        <SelectBody>
          {arrayCategory.map(el => (
            <ItemBody key={el} onClick={() => onItemBody(el)}>
              <span>{el}</span>
            </ItemBody>
          ))}
        </SelectBody>
      )}
    </Select>
  );
};

export default SelectCategory;
