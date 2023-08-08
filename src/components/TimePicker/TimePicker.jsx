import { Space, TimePicker } from 'antd';
import { Container } from './TimePicker.styled';
import moment from 'moment';
import { useState } from 'react';

const TimePickerComponent = ({ setIsTime, time }) => {
  const [selectedTime, setSelectedTime] = useState(time);

  return (
    <Container>
      <Space wrap>
        <TimePicker
          use12Hours
          format="h:mm "
          value={moment(selectedTime, 'HH:mm ')}
          // onChange={onChange}
          onSelect={value => {
            const timeString = moment(value).format('HH:mm ');
            setSelectedTime(timeString);
            setIsTime(timeString);
          }}
          size="large"
        />
      </Space>
    </Container>
  );
};

export default TimePickerComponent;
