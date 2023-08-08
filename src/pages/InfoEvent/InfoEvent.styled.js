import styled from 'styled-components';
import { device, size } from '../../utils/mixins';
import { colors } from '../../utils/colors';

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

export const TitleInfo = styled.h2`
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${colors.text};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;

  ${device.tablet} {
    font-size: 32px;
  }
  ${device.desktop} {
    margin-left: 406px;
    margin-top: 17px;
  }
`;
