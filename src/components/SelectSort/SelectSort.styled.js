import styled from 'styled-components';
import Sort from '../../assets/sort.svg';
import SortAccent from '../../assets/sort-accent.svg';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';

export const Select = styled.div`
  position: relative;
  margin-left: 24px;
  display: ${props => (props.type ? `none` : 'block')};
  width: 56px;
  height: 56px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    width: 24px;
    height: 24px;

    background-image: url(${Sort});
    background-repeat: no-repeat;
    background-size: 100%;
  }

  &.active {
    width: 158px;
    padding-right: 60px;
    padding-left: 24px;
    border-radius: 8px 8px 0 0;
  }

  &.active::before {
    top: 16px;
    right: 24px;
    background-image: url(${SortAccent});
  }

  ${device.tablet} {
    display: block;
    width: 129px;
    padding-right: 40px;
    &.active {
      width: 170px;
      padding-right: 40px;
      padding-left: 16px;
    }
  }
`;

export const TextSort = styled.span`
  display: none;
  ${device.tablet} {
    display: inline-block;
    pointer-events: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${colors.accent};
  }
`;

export const TextSelector = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${colors.accent};
  ${device.tablet} {
    display: none;
  }
`;

export const SelectBody = styled.ul`
  position: absolute;
  top: 56px;
  left: 0;
  width: 158px;
  background-color: #ffffff;
  border-radius: 0 0 8px 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  ${device.tablet} {
    width: 170px;
  }
`;

export const ItemBody = styled.li`
  position: relative;
  display: grid;
  grid-template-areas: 'sort img';
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  padding-top: 12px;
  font-size: 14px;
  color: ${colors.divider};
  border-top: 1px solid ${colors.divider};

  & img {
    width: 24px;
    height: 24px;
  }
`;
