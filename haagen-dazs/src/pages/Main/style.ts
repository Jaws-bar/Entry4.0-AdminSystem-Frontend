import styled from "styled-components";

import BackgroundImg from "../../assets/Main-page/background.png";

export const StatisticContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  background-image: url(${BackgroundImg});

  background-repeat: no-repeat;
  font-size: 10px;
  display: flex;
  padding: 0 320px;
`;

export const SelectWrapper = styled.div`
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitle = styled.p`
  opacity: 0.8;
  font-size: 24px;
  line-height: 4.17;
  letter-spacing: 1.2px;
  color: #0f2c4d;
`;

export const TitleWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const Title = styled.p`
  display: inline;
  font-size: 64px;
  font-weight: bold;
  line-height: 1.25;
  letter-spacing: 3.2px;
  color: #292929;
`;

export const Underline = styled.div`
  position: absolute;
  width: 514px;
  bottom: 8px;
  height: 15px;
  background-color: #83ceca;
  z-index: -100;
`;

export const RegionSelectItem = styled.span`
  padding: 0 12px;
  font-size: 24px;
  line-height: 4.17;
  letter-spacing: 1.2px;
  text-align: left;
  color: #292929;
`;

export const SelectExtendIcon = styled.img`
  display: inline-block;
`;
