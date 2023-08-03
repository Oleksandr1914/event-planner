import styled from 'styled-components';
import Background from '../../assets/background.png';
import { device } from '../../utils/mixins';

export const WaveBackground = styled.div`
  width: 100%;
  min-height: calc(100vh - 168px);
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  ${device.tablet} {
    min-height: calc(100vh - 100px);
  }
  ${device.desktop} {
    min-height: calc(100vh - 92px);
  }
`;
