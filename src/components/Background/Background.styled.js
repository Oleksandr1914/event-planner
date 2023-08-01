import styled from 'styled-components';
import Background from '../../assets/background.png';

export const WaveBackground = styled.div`
  width: 100%;
  height: calc(100vh - 168px);
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
