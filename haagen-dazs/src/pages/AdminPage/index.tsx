import * as React from "react";

import { Header } from "../../utils";
import SearchCreteriaSelectBox from "../../components/SearchCreteriaSelectBox";
import ApplicantListContainer from "../../components/ApplicantListContainer";
import Unsubmitted from "../../components/ApplicantInfoView/Unsubmitted";
import Submitted from "../../components/ApplicantInfoView/Submitted";
import PageNation from "../../components/PageNation";
import * as S from "./style";

export interface ListItem {
  code: string;
  name: string;
  region: string;
  type: string;
  arrive: number;
  paid: number;
  submit: number;
}

export interface State {
  currentList: ListItem[];
  currentPage: number;
  list: ListItem[];
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isNotArrivedSelected: boolean;
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
  isSubmitedApplicant: boolean;
  numberOfPages: number;
}

class AdminPage extends React.Component<null, State> {
  public state: State = {
    currentList: [],
    currentPage: 1,
    isDaejeonSelected: false,
    isGeneralSelected: false,
    isMeisterSelected: false,
    isNationwideSelected: false,
    isNotArrivedSelected: false,
    isSocialIntegrationSelected: false,
    isSubmitedApplicant: false,
    isUnpaidSelected: false,
    list: [],

    numberOfPages: 0
  };

  public componentWillMount() {
    this.setState({ numberOfPages: Math.ceil(this.state.list.length / 10) });
    const currentList: ListItem[] = this.state.list.slice(0, 10);
    this.setState({ currentList });
  }

  public render() {
    const {
      currentPage,
      isDaejeonSelected,
      isNationwideSelected,
      isUnpaidSelected,
      isNotArrivedSelected,
      isGeneralSelected,
      isSocialIntegrationSelected,
      isSubmitedApplicant,
      isMeisterSelected,
      numberOfPages
    } = this.state;

    return (
      <>
        <Header
          isActivation={true}
          isDaejeonSelected={isDaejeonSelected}
          isNationwideSelected={isNationwideSelected}
          isUnpaidSelected={isUnpaidSelected}
          isNotArrivedSelected={isNotArrivedSelected}
          isGeneralSelected={isGeneralSelected}
          isSocialIntegrationSelected={isSocialIntegrationSelected}
          isMeisterSelected={isMeisterSelected}
          handleChangeDaejeonCheckbox={this.handleChangeDaejeonCheckbox}
          handleChangeNationwideCheckbox={this.handleChangeNationwideCheckbox}
          handleChangeUnpaidCheckbox={this.handleChangeUnpaidCheckbox}
          handleChangeNotArrivedCheckbox={this.handleChangeNotArrivedCheckbox}
          handleChangeGeneralCheckbox={this.handleChangeGeneralCheckbox}
          handleChangeSocialIntegrationCheckbox={
            this.handleChangeSocialIntegrationCheckbox
          }
          handleChangeMeisterCheckbox={this.handleChangeMeisterCheckbox}
          pageType="admin"
        />
        <S.AdminContentContainer>
          <S.ApplicantListContainer>
            <SearchCreteriaSelectBox
              isDaejeonSelected={isDaejeonSelected}
              isNationwideSelected={isNationwideSelected}
              isUnpaidSelected={isUnpaidSelected}
              isNotArrivedSelected={isNotArrivedSelected}
              isGeneralSelected={isGeneralSelected}
              isSocialIntegrationSelected={isSocialIntegrationSelected}
              isMeisterSelected={isMeisterSelected}
              handleChangeDaejeonCheckbox={this.handleChangeDaejeonCheckbox}
              handleChangeNationwideCheckbox={
                this.handleChangeNationwideCheckbox
              }
              handleChangeUnpaidCheckbox={this.handleChangeUnpaidCheckbox}
              handleChangeNotArrivedCheckbox={
                this.handleChangeNotArrivedCheckbox
              }
              handleChangeGeneralCheckbox={this.handleChangeGeneralCheckbox}
              handleChangeSocialIntegrationCheckbox={
                this.handleChangeSocialIntegrationCheckbox
              }
              handleChangeMeisterCheckbox={this.handleChangeMeisterCheckbox}
            />
            <ApplicantListContainer
              checkApplicantSubmissionStatus={
                this.checkApplicantSubmissionStatus
              }
              changeNumberOfPages={this.changeNumberOfPages}
              currentList={this.state.currentList}
            />
            <PageNation
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              handleClickBackPageBtn={this.handleClickBackPageBtn}
              handleClickNextPageBtn={this.handleClickNextPageBtn}
              handleClickPageBtn={this.handleClickPageBtn}
            />
          </S.ApplicantListContainer>

          <S.ApplicantInfoView>
            {isSubmitedApplicant ? <Submitted /> : <Unsubmitted />}
          </S.ApplicantInfoView>
        </S.AdminContentContainer>
      </>
    );
  }

  private handleChangeDaejeonCheckbox = (): void => {
    this.setState({ isDaejeonSelected: !this.state.isDaejeonSelected });
  };

  private handleChangeNationwideCheckbox = (): void => {
    this.setState({ isNationwideSelected: !this.state.isNationwideSelected });
  };

  private handleChangeUnpaidCheckbox = (): void => {
    this.setState({ isUnpaidSelected: !this.state.isUnpaidSelected });
  };

  private handleChangeNotArrivedCheckbox = (): void => {
    this.setState({ isNotArrivedSelected: !this.state.isNotArrivedSelected });
  };

  private handleChangeGeneralCheckbox = (): void => {
    this.setState({ isGeneralSelected: !this.state.isGeneralSelected });
  };

  private handleChangeSocialIntegrationCheckbox = (): void => {
    this.setState({
      isSocialIntegrationSelected: !this.state.isSocialIntegrationSelected
    });
  };

  private handleChangeMeisterCheckbox = (): void => {
    this.setState({ isMeisterSelected: !this.state.isMeisterSelected });
  };

  private checkApplicantSubmissionStatus = (status: boolean): void => {
    this.setState({ isSubmitedApplicant: status });
  };

  private changeNumberOfPages = (numberOfPages: number): void => {
    this.setState({ numberOfPages });
  };

  private handleClickBackPageBtn = (): void => {
    if (this.state.currentPage - 1 > 0) {
      const currentPage: number = this.state.currentPage - 1;
      const currentList: ListItem[] = this.state.list.slice(
        10 * (this.state.currentPage - 2),
        10 * (this.state.currentPage - 1)
      );
      this.setState({ currentPage, currentList });
    }
  };

  private handleClickNextPageBtn = (): void => {
    if (!(this.state.currentPage + 1 > this.state.numberOfPages)) {
      const currentPage: number = this.state.currentPage + 1;
      const currentList: ListItem[] = this.state.list.slice(
        10 * this.state.currentPage,
        10 * (this.state.currentPage + 1)
      );
      this.setState({ currentPage, currentList });
    }
  };

  private handleClickPageBtn = (key: number): void => {
    const currentList: ListItem[] = this.state.list.slice(
      10 * this.state.currentPage,
      10 * (this.state.currentPage + 1)
    );
    this.setState({ currentList, currentPage: key });
  };
}

export default AdminPage;
