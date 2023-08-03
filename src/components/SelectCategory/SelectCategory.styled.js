import styled from 'styled-components';
import Category from '../../assets/category.svg';
import { colors } from '../../utils/colors';

export const Select = styled.div`
  position: relative;
  display: ${props => (props.type ? `none` : 'block')};
  width: 56px;
  height: 56px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 2;
    width: 24px;
    height: 24px;

    background-image: url(${Category});
    background-repeat: no-repeat;
    background-size: 100%;
  }

  &.active {
    width: 158px;
    padding-left: 49px;
    padding-right: 33px;
    border-radius: 8px 8px 0 0;
  }

  &.active::before {
    top: 16px;
    left: 21px;
  }
`;

export const TextSelector = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${colors.accent};
`;

export const SelectBody = styled.ul`
  position: absolute;
  top: 56px;
  left: 0;
  width: 158px;
  background-color: #ffffff;
  border-radius: 0 0 8px 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const ItemBody = styled.li`
  position: relative;
  padding: 8px 24px;
  padding-top: 12px;
  font-size: 14px;
  color: ${colors.divider};
  border-top: 1px solid ${colors.divider};
`;
