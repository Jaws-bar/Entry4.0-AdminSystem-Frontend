import * as React from "react";

// import { Footer } from "../../utils";
// import Header from "../../utils/Header";
import * as S from "./style";
import CompetitionView from "./CompetitonView";
import ExtendIcon from "../../assets/Main-page/ic_down.png";

export interface Props {}

export interface State {}

class Main extends React.Component<Props, State> {
  render() {
    return (
      <S.StatisticContainer>
        <S.SelectWrapper>
          <S.SubTitle>Entry DSM 2019 Admin page</S.SubTitle>
          <S.TitleWrapper>
            <S.Title>입학원서 접수 현황</S.Title>
            <S.Underline />
          </S.TitleWrapper>
          <S.RegionSelectItem>
            대전 <S.SelectExtendIcon src={ExtendIcon} alt="Extend Icon" />
          </S.RegionSelectItem>
        </S.SelectWrapper>
        <CompetitionView />
      </S.StatisticContainer>
    );
  }
}

export default Main;
