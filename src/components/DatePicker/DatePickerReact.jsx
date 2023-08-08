import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ContainerDate, CustomInput } from './DatePickerReact.styled';

const DatePickerReact = ({ setIsDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <ContainerDate>
      <DatePicker
        selected={startDate}
        onChange={date => {
          let day = date.getDate();
          let month = date.getMonth();
          let year = date.getFullYear();
          let format = day + '.' + (month + 1) + '.' + year;

          setIsDate(format);
          setStartDate(date);
        }}
        customInput={<CustomInput />}
      />
    </ContainerDate>
  );
};

export default DatePickerReact;
