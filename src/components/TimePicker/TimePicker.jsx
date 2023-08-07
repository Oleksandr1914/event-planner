import { Space, TimePicker } from 'antd';
import { Container } from './TimePicker.styled';

const TimePickerComponent = ({ setIsTime }) => {
  const onChange = (time, timeString) => {
    setIsTime(timeString);
  };

  return (
    <Container>
      <Space wrap>
        <TimePicker
          use12Hours
          format="h:mm a"
          onChange={onChange}
          size="large"
        />
      </Space>
    </Container>
  );
};

export default TimePickerComponent;
