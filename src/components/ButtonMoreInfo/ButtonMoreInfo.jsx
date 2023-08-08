import { Button } from './ButtonMoreInfo.styled';

const ButtonMoreInfo = ({ event }) => {
  return (
    <Button to="/info-event" state={{ ...event }} className="hover">
      More info
    </Button>
  );
};

export default ButtonMoreInfo;
