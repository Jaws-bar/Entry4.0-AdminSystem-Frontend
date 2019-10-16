import * as React from "react";

import { Header, Footer } from "../../utils";
import * as S from "./style";
import CompetitionView from "../../components/CompetitonView";
import ExtendIcon from "../../assets/Main-page/ic_down.png";
import ReduceIcon from "../../assets/Main-page/ic_up.png";
import { getApplicantsList } from "../../lib/api/index";

export interface State {
  isExtend: boolean;
  selectedItem: string;
}

class Main extends React.Component<null, State> {
  public state: State = {
    isExtend: false,
    selectedItem: "대전"
  };

  private regionList: Array<{ region: string; className: string }> = [
    { region: "대전", className: "daejeon" },
    { region: "전체", className: "all" },
    { region: "전국", className: "nationwide" }
  ];

  public render() {
    return (
      <>
        <Header
          isActivation={false}
          isDaejeonSelected={false}
          isNationwideSelected={false}
          isUnpaidSelected={false}
          isNotArrivedSelected={false}
          isGeneralSelected={false}
          isSocialIntegrationSelected={false}
          isMeisterSelected={false}
          isUnsubmittedSelected={false}
          handleChangeNationwideCheckbox={null}
          handleChangeDaejeonCheckbox={null}
          handleChangeUnpaidCheckbox={null}
          handleChangeNotArrivedCheckbox={null}
          handleChangeGeneralCheckbox={null}
          handleChangeSocialIntegrationCheckbox={null}
          handleChangeMeisterCheckbox={null}
          handleChangeUnsubmittedCheckbox={null}
          pageType="main"
          getApplicantsList={null}
          lastUpdatedList={null}
          list={null}
          searchApplicant={null}
        />
        <S.StatisticContainer>
          <S.SelectWrapper>
            <S.SubTitle>Entry DSM 2019 Admin page</S.SubTitle>
            <S.TitleWrapper>
              <S.Title>입학원서 접수 현황</S.Title>
              <S.Underline />
            </S.TitleWrapper>
            <S.SelectBoxWrapper onClick={this.handleExtend}>
              {this.state.isExtend ? (
                <S.SelectBox>{this.handleCreateSelectBox()}</S.SelectBox>
              ) : (
                <S.RegionSelectItem region={this.state.selectedItem}>
                  {this.state.selectedItem}
                  <S.SelectExtendIcon src={ExtendIcon} alt="Extend Icon" />
                </S.RegionSelectItem>
              )}
            </S.SelectBoxWrapper>
          </S.SelectWrapper>
          <CompetitionView selectedItem={this.state.selectedItem} />
        </S.StatisticContainer>
        <Footer />
      </>
    );
  }

  private handleExtend = (): void => {
    this.setState({ isExtend: !this.state.isExtend });
  };

  private handleSelectRegion = (className: string): void => {
    this.regionList.map(r => {
      if (className.includes(r.className)) {
        this.setState({ selectedItem: r.region });
      }
    });
  };

  private handleCreateSelectBox = () => {
    const sortedRegionList: string[] = ["대전", "전체", "전국"];
    const classNameList: string[] = [];
    sortedRegionList.splice(
      sortedRegionList.indexOf(this.state.selectedItem),
      1
    );
    sortedRegionList.splice(0, 0, this.state.selectedItem);

    sortedRegionList.map((r, index) => {
      for (const i in this.regionList) {
        if (this.regionList[i].region === r) {
          classNameList[index] = this.regionList[i].className;
        }
      }
    });

    return sortedRegionList.map((region, i) => (
      <S.RegionSelectItem
        key={region}
        region={region}
        onClick={({ currentTarget: { className } }) =>
          this.handleSelectRegion(className)
        }
        className={classNameList[i]}
      >
        {region}
        {i === 0 && <S.SelectExtendIcon src={ReduceIcon} alt="Reduce Icon" />}
      </S.RegionSelectItem>
    ));
  };
}

export default Main;
