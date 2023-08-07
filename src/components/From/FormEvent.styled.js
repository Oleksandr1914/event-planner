import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { ReactComponent as Cross } from '../../assets/cross-small.svg';

export const ContainerForm = styled.div`
  padding: 40px 16px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const ContainerInputBox = styled.div`
  display: grid;
`;

export const InputBox = styled.div`
  display: grid;
  position: relative;
  margin-bottom: 20px;

  & img {
    width: 24px;
    position: absolute;
    top: 40px;
    right: 12px;
    pointer-events: none;
  }
`;

export const IconInput = styled(Cross)`
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 12px;
  width: 24px;
  height: 24px;
  & path {
    stroke: ${colors.accent};
  }

  &.red path {
    stroke: ${colors.hight};
  }

  &.disabled path {
    stroke: ${colors.divider};
  }
`;

export const Labal = styled.label`
  margin-bottom: 8px;
  line-height: 1;
  letter-spacing: 0.4px;
  color: ${colors.accent};

  &.disabled {
    color: ${colors.divider};
  }
`;

export const TextError = styled.div`
  position: absolute;
  bottom: -16px;
  right: 19px;
  font-size: 12px;
  line-height: 1.33;
  color: ${colors.hight};
`;

export const Input = styled.input`
  padding: 16px 12px;
  line-height: 1.5;
  color: ${colors.text};
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  outline: transparent;

  &::placeholder {
    color: ${colors.text};
  }

  &.invalid {
    border-color: ${colors.hight};
  }

  &.disabled {
    background-color: rgba(255, 255, 255, 1);
    &::placeholder {
      color: ${colors.divider};
    }
  }
`;

export const Description = styled.textarea`
  height: 156px;
  padding: 16px 12px;
  padding-right: 36px;
  line-height: 1.5;
  color: ${colors.text};
  border-width: 2px;
  border-radius: 8px;
  border: 1px solid ${colors.divider};
  outline: transparent;

  &::placeholder {
    color: ${colors.text};
  }

  &.invalid {
    border-color: ${colors.hight};
  }
`;

export const SubmitFormButton = styled.button`
  display: block;
  width: 100%;
  padding: 16px 12px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 1);
  background-color: ${colors.accent};
  border-radius: 8px;

  &.active-selector {
    margin-top: 50px;
  }
`;
