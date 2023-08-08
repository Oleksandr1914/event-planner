import styled from 'styled-components';
import Up from '../../assets/select-up.svg';
import Down from '../../assets/select-down.svg';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';

export const Select = styled.div`
  position: relative;
  display: block;
  width: 240px;
  height: 56px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  pointer-events: visible;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 12px;
    /* z-index: 2; */
    width: 24px;
    height: 24px;

    background-image: ${props => (props.type ? `url(${Up})` : `url(${Down})`)};
    background-repeat: no-repeat;
    background-size: 100%;
  }

  ${device.tablet} {
    display: block;
    width: 308px;
    padding-right: 50px;

    &.active {
      width: 308px;
      padding-left: 16px;
    }

    &.active::before {
      right: 16px;
    }
  }
`;

export const TextSelector = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.text};
`;

export const SelectBody = styled.ul`
  position: absolute;
  top: 74px;
  left: 0;
  z-index: 10;
  width: 240px;
  padding: 0 16px;
  background-color: #ffffff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  border-radius: 8px;
  ${device.tablet} {
    width: 308px;
  }
`;

export const ItemBody = styled.li`
  position: relative;
  padding: 16px 0;
  padding-top: 12px;
  font-size: 14px;
  color: ${colors.text};
  &:not(:first-child) {
    border-top: 1px solid ${colors.divider};
  }
`;
