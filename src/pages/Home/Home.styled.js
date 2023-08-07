import styled from 'styled-components';
import { device, size } from '../../utils/mixins';
import { colors } from '../../utils/colors';
import Plus from '../../assets/plus.svg';
import { NavLink } from 'react-router-dom';

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

export const FilterBlock = styled.div`
  margin-left: auto;
  display: grid;
  justify-content: end;
  justify-items: end;
  grid-template-areas: 'category sort add';
`;
export const ButtonAdd = styled(NavLink)`
  position: relative;
  margin-left: 24px;
  width: 56px;
  height: 56px;
  padding: 16px;
  background-color: ${colors.accent};
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  &:hover {
    background-color: ${colors.hover};
  }

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 2;
    width: 24px;
    height: 24px;

    background-image: url(${Plus});
    background-repeat: no-repeat;
    background-size: 100%;
  }
  ${device.tablet} {
    width: 193px;
    padding-left: 46px;
    &::after {
      content: 'Add new event';
      padding: 0;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const EventBlock = styled.div`
  position: relative;
  margin-top: 40px;
  display: grid;
  gap: 24px;
  ${device.tablet} {
    margin-top: 96px;
    grid-template-areas:
      'card card'
      'card card'
      'card card';
  }

  ${device.desktop} {
    margin-top: 40px;
    grid-template-areas:
      'card card card card'
      'card card card card';
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
