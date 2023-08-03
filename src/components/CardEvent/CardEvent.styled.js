import styled from 'styled-components';
// import { device } from '../../utils/mixins';
import { colors } from '../../utils/colors';

export const ContainerCard = styled.div`
  position: relative;
  width: 272px;
  height: 480px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const ImageCard = styled.img`
  width: 272px;
  height: 340px;
  border-radius: 12px 12px 0 0;
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
