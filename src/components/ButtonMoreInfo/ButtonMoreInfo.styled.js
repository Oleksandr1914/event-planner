import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: none;
  width: 114px;
  margin-top: 16px;
  margin-left: auto;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  background-color: ${colors.accent};

  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: ${colors.hover};
  }
`;
