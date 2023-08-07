import { useEffect, useRef } from 'react';
import {
  ItemBody,
  Select,
  SelectBody,
  TextSelector,
} from './SelectForm.styled';

const SelectForm = ({ array, isActive, setIsActive, isValue, setIsValue }) => {
  const btnRef = useRef();

  const selectHandler = () => {
    setIsActive(!isActive);
  };

  const onItemBody = element => {
    setIsValue(element);
    setIsActive(!isActive);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsActive(!isActive);
      }
    };

    const handleBodyClick = e => {
      if (e.target !== btnRef.current) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      body.addEventListener('click', handleBodyClick);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      body.removeEventListener('click', handleBodyClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);

  return (
    <Select ref={btnRef} type={isActive ? 'up' : ''} onClick={selectHandler}>
      <TextSelector>{isValue.length > 0 ? isValue : 'Input'}</TextSelector>
      {isActive && (
        <SelectBody>
          {array.map(el => (
            <ItemBody key={el} onClick={() => onItemBody(el)}>
              <span>{el}</span>
            </ItemBody>
          ))}
        </SelectBody>
      )}
    </Select>
  );
};

export default SelectForm;
