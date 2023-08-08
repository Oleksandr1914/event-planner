import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';

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
  ${device.tablet} {
    width: 308px;
  }
  ${device.desktop} {
    width: 372px;
  }
`;

export const ContainerDate = styled.div`
  & .react-datepicker-popper[data-placement^='top'] {
    width: 240px;
  }

  & .react-datepicker {
    border-radius: 8px !important;
    width: 240px;
  }

  & .react-datepicker-popper .react-datepicker__triangle {
    display: none !important;
  }

  & .react-datepicker__header {
    width: 230px;
    padding: 20px;
    border-bottom: 0;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
  }
  & .react-datepicker__current-month {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
  & .react-datepicker__navigation {
    top: 20px;
    right: 20px;
  }
  & .react-datepicker__navigation {
    border-color: rgba(63, 63, 63, 1);
  }
  & .react-datepicker__day {
    border-radius: 0;
    color: rgba(255, 255, 255, 1);
    width: 28px;
    height: 32px;
    line-height: 2.5 !important;
  }
  & .react-datepicker__day--selected {
    color: rgba(255, 255, 255, 1) !important;
  }
  & .react-datepicker__day-names {
    margin-top: 16px;
  }
  & .react-datepicker__day-name {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    margin: 0;
  }
  & .react-datepicker__day-name:first-child,
  & .react-datepicker__day-name:last-child {
    color: rgba(255, 43, 119, 1) !important;
  }

  & .react-datepicker__day {
    font-size: 12px;
    line-height: 1.33;
    color: rgba(172, 167, 195, 1);
  }

  ${device.tablet} {
    & .react-datepicker-popper[data-placement^='top'] {
      width: 308px;
    }

    & .react-datepicker {
      width: 308px;
    }

    & .react-datepicker__header {
      width: 298px;
    }
    & .react-datepicker__day {
      width: 38px;
      height: 32px;
    }
    & .react-datepicker__day-name {
      width: 38px;
      height: 32px;
    }
  }

  ${device.desktop} {
    & .react-datepicker-popper[data-placement^='top'] {
      width: 372px;
    }

    & .react-datepicker {
      width: 372px;
    }

    & .react-datepicker__header {
      width: 362px;
    }
    & .react-datepicker__day {
      width: 47px;
      height: 32px;
    }
    & .react-datepicker__day-name {
      width: 47px;
      height: 32px;
    }
  }
`;
