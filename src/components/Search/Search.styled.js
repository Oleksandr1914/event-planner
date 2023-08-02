import styled from 'styled-components';
import Search from '../../assets/search.svg';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';

export const SearchBox = styled.div`
  position: relative;
  grid-area: search;
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 24px;
    height: 24px;
    top: 15px;
    left: 15px;
    background-image: url(${Search});
    background-repeat: no-repeat;
    background-size: 100%;
  }
  ${device.tablet} {
    margin-right: 24px;
  }
`;

export const SearchInput = styled.input`
  width: 272px;
  height: 48px;
  padding: 17px;
  padding-left: 48px;
  border: none;
  border-radius: 8px;
  box-shadow: 3px 4px 9px 0px rgba(166, 141, 174, 0.75);
  font-size: 14px;
  font-weight: 300;
  line-height: 1;
  color: ${colors.text};
  &::placeholder {
    color: ${colors.divider};
  }
  ${device.tablet} {
    width: 368px;
  }
  ${device.desktop} {
    width: 410px;
  }
`;
