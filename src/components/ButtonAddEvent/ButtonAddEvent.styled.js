import styled from 'styled-components';
import { colors } from '../../utils/colors';
import Plus from '../../assets/plus.svg';
import { device } from '../../utils/mixins';

export const ButtonAdd = styled.button`
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
