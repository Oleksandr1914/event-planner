import { useEffect, useRef, useState } from 'react';
import {
  SelectHeader,
  SelectBody,
  SelectBodyElement,
  Selector,
} from './SelectLanguage.styled';

const SelectLanguage = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [value, setValue] = useState('UK');
  const btnRef = useRef();

  const language = ['UK', 'EN'];

  const selectHandler = () => {
    setIsSelect(!isSelect);
  };

  const onSelctBodyElement = element => {
    setValue(element);
    setIsSelect(!isSelect);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsSelect(false);
      }
    };

    const handleBodyClick = e => {
      if (e.target !== btnRef.current) {
        setIsSelect(false);
      }
    };

    if (isSelect) {
      body.addEventListener('click', handleBodyClick);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      body.removeEventListener('click', handleBodyClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSelect]);

  return (
    <Selector>
      <SelectHeader ref={btnRef} onClick={selectHandler}>
        {value}
      </SelectHeader>
      {isSelect && (
        <SelectBody>
          {language.map(el => (
            <SelectBodyElement key={el} onClick={() => onSelctBodyElement(el)}>
              {el}
            </SelectBodyElement>
          ))}
        </SelectBody>
      )}
    </Selector>
  );
};

export default SelectLanguage;
