import styled from 'styled-components';
import Vector from '../../assets/vector.svg';
import { colors } from '../../utils/colors';

export const Selector = styled.div`
  position: relative;
  display: grid;
  grid-area: select;
  justify-self: end;
  width: 69px;
  cursor: pointer;
`;

export const SelectHeader = styled.div`
  position: relative;
  grid-area: select;
  padding: 16px 12px;
  padding-right: 35px;
  width: 69px;
  background-color: rgba(255, 255, 255, 1);
  color: ${colors.text};
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 3px 4px 9px 0px rgba(166, 141, 174, 0.75);
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 24px;
    height: 24px;
    top: 12px;
    right: 7px;
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

export const SelectBody = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  display: grid;
  gap: 8px;
  padding: 16px 12px;
  width: 69px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 3px 4px 9px 0px rgba(166, 141, 174, 0.75);
  border-radius: 8px;
`;

export const SelectBodyElement = styled.div`
  position: relative;
  padding-bottom: 4px;
  width: 45px;

  color: ${colors.divider};
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 1px;
    background-color: ${colors.divider};
  }
`;
