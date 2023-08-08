import styled from 'styled-components';
import { device } from '../../utils/mixins';
import { colors } from '../../utils/colors';

export const ContainerCard = styled.div`
  position: relative;
  width: 272px;
  height: 480px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  &:hover .hover,
  &:focus .hover {
    outline: none;
    display: block;
  }

  ${device.tablet} {
    width: 332px;
  }
  ${device.desktop} {
    width: 302px;
  }
`;

export const ImageCard = styled.img`
  width: 272px;
  height: 340px;
  border-radius: 12px 12px 0 0;
  ${device.tablet} {
    width: 332px;
  }
  ${device.desktop} {
    width: 302px;
  }
`;

export const BottomOfTheCard = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const BlockLocationAndTime = styled.div`
  display: grid;
  grid-template-areas: 'data locaion';
  justify-content: space-between;
  width: 272px;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.8);
  ${device.tablet} {
    width: 332px;
  }
  ${device.desktop} {
    width: 302px;
  }
`;

export const DataTimeText = styled.p`
  font-size: 14px;
  line-height: 1.71;
  color: ${colors.accent};
`;

export const LocationText = styled.p`
  font-size: 14px;
  line-height: 1.71;
  color: ${colors.accent};
`;

export const BlockTitle = styled.div`
  width: 272px;
  min-height: 144px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0 0 12px 12px;
  ${device.tablet} {
    width: 332px;
  }
  ${device.desktop} {
    width: 302px;
  }
`;

export const TitleCard = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(28, 27, 31, 1);
`;

export const DescriptionCard = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.42;
  color: rgba(28, 27, 31, 1);
`;

export const CategoryBox = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: grid;
  grid-template-areas: 'category priority';
  gap: 12px;
`;

export const CategoryText = styled.span`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
`;

export const PriorityText = styled.span`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border-radius: 8px;
  color: ${props => {
    if (props.type === 'High') {
      return `${colors.hight}`;
    } else if (props.type === 'Medium') {
      return `${colors.medium}`;
    } else if (props.type === 'Low') {
      return `${colors.low}`;
    }
  }};
  background-color: rgba(255, 255, 255, 1);
`;
