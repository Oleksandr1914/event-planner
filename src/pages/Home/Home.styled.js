import styled from 'styled-components';
import { device, size } from '../../utils/mixins';
import { colors } from '../../utils/colors';

export const Container = styled.main`
  width: ${size.mobile};
  margin: 0 auto;
  padding: 41px 24px;
  ${device.tablet} {
    width: ${size.tablet};
    padding: 40px;
  }
  ${device.desktop} {
    width: ${size.desktop};
    padding: 60px 80px;
  }
`;

export const FilterBlock = styled.div`
  margin-left: auto;
  display: grid;
  justify-content: end;
  justify-items: end;
  grid-template-areas: 'category sort add';
`;

export const EventBlock = styled.div`
  position: relative;
  margin-top: 40px;
  ${device.tablet} {
    margin-top: 96px;
  }

  ${device.desktop} {
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  display: none;

  color: ${colors.text};
  ${device.tablet} {
    display: block;
    position: absolute;
    top: -72px;
    left: 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.5;
  }

  ${device.desktop} {
    top: -92px;
  }
`;
