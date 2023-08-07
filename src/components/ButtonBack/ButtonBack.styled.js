import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils/colors';

export const ButtonGoBack = styled(NavLink)`
  display: grid;
  grid-template-areas: 'arrow text';
  align-items: center;
  gap: 8px;
  width: 67px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: ${colors.accent};

  & img {
    width: 24px;
    height: 24px;
  }
`;
