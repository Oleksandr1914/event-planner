import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';

export const Container = styled.div`
  & .ant-picker {
    border: 1px solid ${colors.divider} !important;
  }

  & .ant-picker-large {
    width: 240px !important;
    padding: 16px 12px !important;
  }

  & .ant-picker-time-panel {
    width: 240px !important;
  }

  & .anticon {
    display: none;
  }

  ${device.tablet} {
    & .ant-picker-large {
      width: 308px !important;
    }

    & .ant-picker-time-panel {
      width: 308px !important;
    }
  }
`;
