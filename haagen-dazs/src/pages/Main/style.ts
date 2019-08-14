import styled from "styled-components";

import BackgroundImg from "../../assets/Main-page/background.png";

interface ISelectItem {
  region: string;
}

export const StatisticContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  /* background: url(${BackgroundImg}); */
  background-color: #fdfdfd;
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
  letter-spacing: 1.2px;
  color: #0f2c4d;
`;

export const TitleWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 73px;
  margin-top: 20px;
`;

export const Title = styled.p`
  top: 0;
  position: absolute;
  display: inline;
  font-size: 64px;
  font-weight: bold;
  line-height: 1.25;
  letter-spacing: 3.2px;
  color: #292929;
  z-index: 100;
`;

export const Underline = styled.div`
  position: absolute;
  width: 514px;
  bottom: 0px;
  height: 15px;
  background-color: #83ceca;
  z-index: 0;
`;

export const RegionSelectItem = styled.div<ISelectItem>`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 24px;
  letter-spacing: 1.2px;
  text-align: left;
  color: #292929;
  cursor: pointer;
`;

export const SelectExtendIcon = styled.img`
  display: inline-block;
  margin-left: 7px;
`;

export const SelectBoxWrapper = styled.span`
  width: 97px;
  height: 130px;
  margin-top: 36px;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 97px;
  height: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;
