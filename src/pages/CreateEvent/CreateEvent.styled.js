import styled from 'styled-components';
import { device, size } from '../../utils/mixins';
import { colors } from '../../utils/colors';

export const CreateContainer = styled.div`
  width: ${size.mobile};
  margin: 0 auto;
  padding: 42px 24px;
  ${device.tablet} {
    width: ${size.tablet};
    padding: 40px;
    padding-top: 41px;
  }
  ${device.desktop} {
    width: ${size.desktop};
    padding: 18px 0;
  }
`;

export const TitleCreat = styled.h2`
  margin-top: 24px;
  color: ${colors.text};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;

  ${device.tablet} {
    font-size: 32px;
  }
  ${device.desktop} {
    margin-top: 17px;
  }
`;
