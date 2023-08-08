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

export const BoxTitleCard = styled.div`
  width: 272px;
  padding-top: 24px;
  ${device.tablet} {
    width: 688px;
  }
  ${device.desktop} {
    width: 628px;
    padding: 17px;
    margin: 0 auto;
  }
`;

export const TitleInfo = styled.h2`
  margin-bottom: 24px;
  color: ${colors.text};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;

  ${device.tablet} {
    font-size: 32px;
  }
`;
