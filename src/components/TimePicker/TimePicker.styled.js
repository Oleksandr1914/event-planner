import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';

export const Container = styled.div`
  & .ant-picker {
    border: 1px solid ${colors.divider};
  }

  & .ant-picker-large {
    width: 240px;
    padding: 16px 12px;
  }

  & .ant-picker-time-panel {
    width: 240px;
  }

  & .anticon {
    display: none;
  }

  ${device.tablet} {
    & .ant-picker-large {
      width: 308px;
    }

    & .ant-picker-time-panel {
      width: 308px;
    }
  }

  ${device.desktop} {
    & .dsiktF .ant-picker-large {
      width: 372x !important;
    }
    & .ant-picker-large {
      width: 372px;
    }
    & .ant-picker-time-panel {
      width: 372px !important;
    }
  }
`;
