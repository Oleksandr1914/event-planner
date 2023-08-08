import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';

export const ContainerCard = styled.div`
  min-height: 464px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const ImageCard = styled.img`
  width: 272px;
  height: 168px;
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
  ${device.tablet} {
    width: 688px;
    height: 272px;
  }
  ${device.desktop} {
    width: 628px;
  }
`;

export const BlockTextCard = styled.div`
  padding: 24px 16px;
  padding-bottom: 40px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.42;
  color: rgba(28, 27, 31, 1);
`;

export const ListInfoCategory = styled.ul`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const ItemInfoCategory = styled.li`
  display: inline-block;
  padding: 6px 12px;
  margin-right: 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${colors.accent};

  &:last-child {
    margin-top: 12px;
  }
`;

export const Priority = styled.span`
  color: ${props => {
    if (props.type === 'High') {
      return `${colors.hight}`;
    } else if (props.type === 'Medium') {
      return `${colors.medium}`;
    } else if (props.type === 'Low') {
      return `${colors.low}`;
    }
  }};
`;
