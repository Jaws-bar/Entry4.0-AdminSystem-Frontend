import * as React from "react";

// import { Footer } from "../../utils";
// import Header from "../../utils/Header";
import * as S from "./style";
import CompetitionView from "../../components/CompetitonView";
import ExtendIcon from "../../assets/Main-page/ic_down.png";
import ReduceIcon from "../../assets/Main-page/ic_up.png";

export interface State {
  isExtend: boolean;
  selectedItem: string;
}

class Main extends React.Component<null, State> {
  state: State = {
    isExtend: false,
    selectedItem: "대전"
  };

  private regionList: Array<string> = ["대전", "전체", "전국"];

  private handleExtend = (): void => {
    this.setState({ isExtend: !this.state.isExtend });
  };

  private handleSelectRegion = (e): void => {
    this.regionList.map(r => {
      if (e.target.innerText === r)
        this.setState({ selectedItem: e.target.innerText });
    });
  };

  private handleCreateSelectBox = () => {
    let sortedRegionList: Array<string> = this.regionList;
    sortedRegionList.splice(
      sortedRegionList.indexOf(this.state.selectedItem),
      1
    );
    sortedRegionList.splice(0, 0, this.state.selectedItem);

    return this.regionList.map((region, i) => (
      <S.RegionSelectItem
        key={region}
        region={sortedRegionList[region]}
        onClick={this.handleSelectRegion}
      >
        {region}
        {i === 0 && <S.SelectExtendIcon src={ReduceIcon} alt="Reduce Icon" />}
      </S.RegionSelectItem>
    ));
  };

  render() {
    return (
      <S.StatisticContainer>
        <S.SelectWrapper>
          <S.SubTitle>Entry DSM 2019 Admin page</S.SubTitle>
          <S.TitleWrapper>
            <S.Title>입학원서 접수 현황</S.Title>
            <S.Underline />
          </S.TitleWrapper>
          <span
            style={{ width: "97px", height: "130px", marginTop: "36px" }}
            onClick={this.handleExtend}
          >
            {this.state.isExtend ? (
              <S.SelectBox>{this.handleCreateSelectBox()}</S.SelectBox>
            ) : (
              <S.RegionSelectItem region={this.state.selectedItem}>
                {this.state.selectedItem}
                <S.SelectExtendIcon src={ExtendIcon} alt="Extend Icon" />
              </S.RegionSelectItem>
            )}
          </span>
        </S.SelectWrapper>
        <CompetitionView selectedItem={this.state.selectedItem} />
      </S.StatisticContainer>
    );
  }
}

export default Main;
