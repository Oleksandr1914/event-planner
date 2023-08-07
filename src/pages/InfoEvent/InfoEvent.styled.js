import styled from 'styled-components';
import { device, size } from '../../utils/mixins';

export const Container = styled.main`
  width: ${size.mobile};
  margin: 0 auto;
  padding: 42px 24px;
  ${device.tablet} {
    width: ${size.tablet};
    padding: 40px;
  }
  ${device.desktop} {
    width: ${size.desktop};
    padding: 60px 0;
  }
`;
