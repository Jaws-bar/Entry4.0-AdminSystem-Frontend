import * as React from "react";

import { Header } from "../../utils";
import SearchCreteriaSelectBox from "../../components/SearchCreteriaSelectBox";
import ApplicantListContainer from "../../components/ApplicantListContainer";
import Unsubmitted from "../../components/ApplicantInfoView/Unsubmitted";
import Submitted from "../../components/ApplicantInfoView/Submitted";
import PageNation from "../../components/PageNation";
import * as S from "./style";
import {
  getApplicantsList,
  getApplication,
  SubmittedApplication,
  Creteria
} from "../../lib/api";

export interface ListItem {
  applicant_tel?: string;
  receipt_code: string | null;
  name: string | null;
  email: string;
  region: "daejeon" | "nation" | null;
  type: "common" | "meister" | "social" | null;
  is_printed_application_arrived: boolean;
  is_paid: boolean;
  is_final_submit: boolean;
  school_name?: string;
}

export interface State {
  applicationData: SubmittedApplication;
  currentList: ListItem[];
  currentPage: number;
  searchCreteriaStatus: Creteria;
  list: ListItem[];
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isUnsubmittedSelected: boolean;
  isNotArrivedSelected: boolean;
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
  numberOfPages: number;
  numberOfPagesArray: number[];
  selectedApplicantIndex: number | null;
}

class AdminPage extends React.Component<null, State> {
  public state: State = {
    applicationData: {
      application: {
        user_email: "",
        apply_type: null,
        additional_type: null,
        is_daejeon: false,
        name: "",
        sex: "",
        birth_date: "",
        parent_name: "",
        parent_tel: "",
        applicant_tel: "",
        address: "",
        school_name: "",
        school_tel: "",
        volunteer_time: 0,
        full_cut_count: 0,
        period_cut_count: 0,
        late_count: 0,
        early_leave_count: 0,
        self_introduction: "",
        study_plan: "",
        ged_average_score: ""
      },
      score: ""
    },
    currentList: [],
    currentPage: 1,
    isDaejeonSelected: false,
    isGeneralSelected: false,
    isMeisterSelected: false,
    isNationwideSelected: false,
    isNotArrivedSelected: false,
    isSocialIntegrationSelected: false,
    isUnpaidSelected: false,
    isUnsubmittedSelected: false,
    list: [],
    numberOfPages: 0,
    numberOfPagesArray: [1],
    selectedApplicantIndex: null,
    searchCreteriaStatus: {}
  };

  public componentWillMount() {
    this.getApplicantsListData();
  }

  public render() {
    const {
      applicationData,
      currentPage,
      currentList,
      isDaejeonSelected,
      isNationwideSelected,
      isUnpaidSelected,
      isUnsubmittedSelected,
      isNotArrivedSelected,
      isGeneralSelected,
      isSocialIntegrationSelected,
      isMeisterSelected,
      numberOfPages,
      selectedApplicantIndex
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
          isUnsubmittedSelected={isUnsubmittedSelected}
          handleChangeDaejeonCheckbox={this.handleChangeDaejeonCheckbox}
          handleChangeNationwideCheckbox={this.handleChangeNationwideCheckbox}
          handleChangeUnpaidCheckbox={this.handleChangeUnpaidCheckbox}
          handleChangeNotArrivedCheckbox={this.handleChangeNotArrivedCheckbox}
          handleChangeGeneralCheckbox={this.handleChangeGeneralCheckbox}
          handleChangeSocialIntegrationCheckbox={
            this.handleChangeSocialIntegrationCheckbox
          }
          handleChangeMeisterCheckbox={this.handleChangeMeisterCheckbox}
          handleChangeUnsubmittedCheckbox={this.handleChangeUnsubmittedCheckbox}
          pageType="admin"
          getApplicantsList={this.getApplicantsListData}
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
              isUnsubmittedSelected={isUnsubmittedSelected}
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
              handleChangeUnsubmittedCheckbox={
                this.handleChangeUnsubmittedCheckbox
              }
            />
            <ApplicantListContainer
              changeNumberOfPages={this.changeNumberOfPages}
              currentList={this.state.currentList}
              handleChangeSelectedIndex={this.handleChangeSelectedIndex}
              selectedIndex={selectedApplicantIndex}
              getApplication={this.getApplication}
            />
            <PageNation
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              handleClickBackPageBtn={this.handleClickBackPageBtn}
              handleClickNextPageBtn={this.handleClickNextPageBtn}
              handleClickPageBtn={this.handleClickPageBtn}
              changePageIndex={this.changePageIndex}
              returnNumberOfPages={this.returnNumberOfPages}
            />
          </S.ApplicantListContainer>

          <S.ApplicantInfoView>
            {selectedApplicantIndex === null ? (
              <div />
            ) : currentList[selectedApplicantIndex].is_final_submit ? (
              <Submitted
                applicationData={applicationData}
                is_printed_application_arrived={
                  currentList[selectedApplicantIndex]
                    .is_printed_application_arrived
                }
                is_paid={currentList[selectedApplicantIndex].is_paid}
              />
            ) : (
              <Unsubmitted applicationData={applicationData} />
            )}
          </S.ApplicantInfoView>
        </S.AdminContentContainer>
      </>
    );
  }

  private handleChangeDaejeonCheckbox = async () => {
    await this.setState({
      isDaejeonSelected: !this.state.isDaejeonSelected
    });
    if (this.state.isDaejeonSelected && this.state.isNationwideSelected) {
      await this.setState({ isNationwideSelected: false });
    }

    await this.checkCreteriaStatus();

    this.getApplicantsListData();
  };

  private handleChangeNationwideCheckbox = async () => {
    await this.setState({
      isNationwideSelected: !this.state.isNationwideSelected
    });
    if (this.state.isNationwideSelected && this.state.isDaejeonSelected) {
      await this.setState({ isDaejeonSelected: false });
    }
    await this.checkCreteriaStatus();

    this.getApplicantsListData();
  };

  private handleChangeUnpaidCheckbox = async () => {
    await this.setState({
      isUnpaidSelected: !this.state.isUnpaidSelected
    });
    await this.checkCreteriaStatus();

    this.getApplicantsListData();
  };

  private handleChangeNotArrivedCheckbox = async () => {
    await this.setState({
      isNotArrivedSelected: !this.state.isNotArrivedSelected
    });
    await this.checkCreteriaStatus();

    this.getApplicantsListData();
  };

  private handleChangeGeneralCheckbox = async () => {
    await this.setState({
      isGeneralSelected: !this.state.isGeneralSelected
    });
    await this.checkCreteriaStatus();
    this.getApplicantsListData();
  };

  private handleChangeSocialIntegrationCheckbox = async () => {
    await this.setState({
      isSocialIntegrationSelected: !this.state.isSocialIntegrationSelected
    });
    await this.checkCreteriaStatus();
    this.getApplicantsListData();
  };

  private handleChangeMeisterCheckbox = async () => {
    await this.setState({
      isMeisterSelected: !this.state.isMeisterSelected
    });
    await this.checkCreteriaStatus();
    this.getApplicantsListData();
  };

  private handleChangeUnsubmittedCheckbox = async () => {
    await this.setState({
      isUnsubmittedSelected: !this.state.isUnsubmittedSelected
    });
    await this.checkCreteriaStatus();
    this.getApplicantsListData();
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
      this.setState({ currentPage, currentList, selectedApplicantIndex: null });
    }
  };

  private handleClickNextPageBtn = (): void => {
    if (!(this.state.currentPage + 1 > this.state.numberOfPages)) {
      const currentPage: number = this.state.currentPage + 1;
      const currentList: ListItem[] = this.state.list.slice(
        10 * this.state.currentPage,
        10 * (this.state.currentPage + 1)
      );
      this.setState({ currentPage, currentList, selectedApplicantIndex: null });
    }
  };

  private handleClickPageBtn = async (key: number) => {
    await this.setState({ currentPage: key });

    const currentList: ListItem[] = this.state.list.slice(
      10 * (this.state.currentPage - 1),
      this.state.currentPage * 10
    );

    await this.setState({
      currentList,
      selectedApplicantIndex: null
    });

    await this.changePageIndex();
  };

  private getApplicantsListData = async () => {
    try {
      const list: ListItem[] = await getApplicantsList({
        access: sessionStorage.getItem("access"),
        body: this.state.searchCreteriaStatus
      });
      await this.setState({ list });
      await this.setState({
        numberOfPages: Math.ceil(this.state.list.length / 10)
      });
      const currentList: ListItem[] = this.state.list.slice(0, 10);
      await this.setState({ currentList });

      await this.changePageIndex();
      await this.setState({ selectedApplicantIndex: null, currentPage: 1 });
    } catch (error) {
      console.log(error);
    }
  };

  private handleChangeSelectedIndex = async (index: number) => {
    await this.setState({ selectedApplicantIndex: index });

    try {
      const applicationData = await getApplication({
        email: this.state.currentList[this.state.selectedApplicantIndex].email,
        access: sessionStorage.getItem("access")
      });

      await this.setState({ applicationData });
    } catch (error) {
      console.log(error);
    }
  };

  private getApplication = async (body: { email: string; access: string }) => {
    try {
      const applicationData: SubmittedApplication = await getApplication({
        email: body.email,
        access: body.access
      });
      await this.setState({ applicationData });
    } catch (error) {
      console.log(error.response);
    }
  };

  private checkCreteriaStatus = async () => {
    const creteriaStatus: Creteria = {};
    if (this.state.isDaejeonSelected) {
      creteriaStatus.region = "daejeon";
    } else if (this.state.isNationwideSelected) {
      creteriaStatus.region = "nation";
    }

    if (this.state.isGeneralSelected) {
      creteriaStatus.type = "common";
    } else if (this.state.isMeisterSelected) {
      creteriaStatus.type = "meister";
    } else if (this.state.isSocialIntegrationSelected) {
      creteriaStatus.type = "social";
    }

    let unpaidUnarrivedUnsubmittedStatus: string = "";

    unpaidUnarrivedUnsubmittedStatus = unpaidUnarrivedUnsubmittedStatus.concat(
      this.state.isUnpaidSelected ? "1" : "0"
    );

    unpaidUnarrivedUnsubmittedStatus = unpaidUnarrivedUnsubmittedStatus.concat(
      this.state.isNotArrivedSelected ? "1" : "0"
    );
    unpaidUnarrivedUnsubmittedStatus = unpaidUnarrivedUnsubmittedStatus.concat(
      this.state.isUnsubmittedSelected ? "1" : "0"
    );

    creteriaStatus.status = unpaidUnarrivedUnsubmittedStatus;

    this.setState({ searchCreteriaStatus: creteriaStatus });
  };

  private changePageIndex = () => {
    if (this.state.numberOfPages < 6) {
      this.setState({
        numberOfPagesArray: this.range(1, this.state.numberOfPages + 1)
      });
    } else {
      if (this.state.currentPage <= 3) {
        this.setState({
          numberOfPagesArray: this.range(1, 6)
        });
      } else if (this.state.currentPage > this.state.numberOfPages - 3) {
        this.setState({
          numberOfPagesArray: this.range(
            this.state.numberOfPages - 4,
            this.state.numberOfPages + 1
          )
        });
      } else {
        this.setState({
          numberOfPagesArray: this.range(
            this.state.currentPage - 2,
            this.state.currentPage + 3
          )
        });
      }
    }
  };

  private returnNumberOfPages = () => {
    return this.state.numberOfPagesArray.map((i, index) =>
      this.state.numberOfPagesArray[index] === this.state.currentPage ? (
        <S.selectedNumberLetter
          key={index}
          onClick={async () => {
            await this.handleClickPageBtn(i);
            await this.changePageIndex();
          }}
        >
          {i}
        </S.selectedNumberLetter>
      ) : (
        <S.unselectedNumberLetter
          key={index}
          onClick={async () => {
            await this.handleClickPageBtn(i);
            await this.changePageIndex();
          }}
        >
          {i}
        </S.unselectedNumberLetter>
      )
    );
  };

  private range(start: number, end: number): number[] {
    const array: number[] = [];
    let pageNum: number = start;

    for (let i = 0; i < end - start; i += 1) {
      array[i] = pageNum;
      pageNum += 1;
    }

    return array;
  }
}

export default AdminPage;
