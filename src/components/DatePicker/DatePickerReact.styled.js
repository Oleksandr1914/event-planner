import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const CustomInput = styled.input`
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
`;
