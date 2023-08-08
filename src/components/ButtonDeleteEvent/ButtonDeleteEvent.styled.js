import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { NavLink } from 'react-router-dom';

export const ButtonDelete = styled(NavLink)`
  /* display: block; */
  width: 108px;
  padding: 8px 16px;
  margin-left: auto;
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  background-color: ${colors.accent};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.42;
  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: ${colors.hover};
  }
`;
