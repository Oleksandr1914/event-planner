import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device, size } from '../../utils/mixins';

export const HeaderBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.accent};
`;

export const ContainerHeader = styled.header`
  display: grid;
  gap: 24px;
  grid-template-areas:
    'logo select'
    'search search';
  padding: 24px;
  width: ${size.mobile};
  margin: 0 auto;

  ${device.tablet} {
    padding: 26px 40px;
    width: ${size.tablet};
    grid-template-areas: 'logo search select';
    grid-template-columns: 1fr 368px 69px;
    gap: 24;
  }
  ${device.desktop} {
    padding: 22px 0;
    grid-template-columns: 1fr 410px 69px;
    width: ${size.desktop};
  }
`;

export const Logo = styled.span`
  grid-area: logo;
  align-self: center;
  color: ${colors.accent};
  font-family: Alata;
  font-size: 24px;
  line-height: 1.33;
`;
