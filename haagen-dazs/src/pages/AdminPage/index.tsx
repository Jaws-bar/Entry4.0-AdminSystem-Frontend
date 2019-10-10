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
  SubmittedApplication
} from "../../lib/api";
import { Creteria } from "../../lib/api/index";

export interface ListItem {
  receipt_code: string | null;
  name: string | null;
  email: string;
  region: "daejeon" | "nation" | null;
  type: "common" | "meister" | "social" | null;
  is_printed_application_arrived: boolean;
  is_paid: boolean;
  is_final_submit: boolean;
}

export interface State {
  applicationData: SubmittedApplication;
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
  numberOfPages: number;
  selectedApplicantIndex: number | null;
}

class AdminPage extends React.Component<null, State> {
  public state: State = {
    applicationData: {
      application: {
        user_email: "",
        apply_time: "",
        additinal_type: "",
        is_daejeon: false,
        name: "",
        sex: "",
        birth_date: "",
        parent_name: "",
        parent_tel: "",
        applicant_tel: "",
        address: "",
        post_code: "",
        student_number: "",
        graduated_year: "",
        school_name: "",
        school_tel: "",
        volunteer_time: 0,
        full_cut_count: 0,
        period_cut_count: 0,
        late_count: 0,
        early_leave_count: 0,
        korean: "",
        social: "",
        history: "",
        math: "",
        science: "",
        tech_and_home: "",
        english: "",
        self_introduction: "",
        study_plan: ""
      },
      score: {
        final_score: ""
      }
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
    list: [],
    numberOfPages: 0,
    selectedApplicantIndex: null
  };

  public componentWillMount() {
    this.getApplicantsListData({});
  }

  public render() {
    const {
      applicationData,
      currentPage,
      currentList,
      isDaejeonSelected,
      isNationwideSelected,
      isUnpaidSelected,
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

  private handleChangeDaejeonCheckbox = (): void => {
    this.setState({ isDaejeonSelected: !this.state.isDaejeonSelected });
    this.checkCreteriaStatus();
  };

  private handleChangeNationwideCheckbox = (): void => {
    this.setState({ isNationwideSelected: !this.state.isNationwideSelected });
    this.checkCreteriaStatus();
  };

  private handleChangeUnpaidCheckbox = (): void => {
    this.setState({ isUnpaidSelected: !this.state.isUnpaidSelected });
    this.checkCreteriaStatus();
  };

  private handleChangeNotArrivedCheckbox = (): void => {
    this.setState({ isNotArrivedSelected: !this.state.isNotArrivedSelected });
    this.checkCreteriaStatus();
  };

  private handleChangeGeneralCheckbox = (): void => {
    this.setState({ isGeneralSelected: !this.state.isGeneralSelected });
    this.checkCreteriaStatus();
  };

  private handleChangeSocialIntegrationCheckbox = (): void => {
    this.setState({
      isSocialIntegrationSelected: !this.state.isSocialIntegrationSelected
    });
    this.checkCreteriaStatus();
  };

  private handleChangeMeisterCheckbox = (): void => {
    this.setState({ isMeisterSelected: !this.state.isMeisterSelected });
    this.checkCreteriaStatus();
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

  private handleClickPageBtn = (key: number): void => {
    const currentList: ListItem[] = this.state.list.slice(
      10 * this.state.currentPage,
      10 * (this.state.currentPage + 1)
    );
    this.setState({
      currentList,
      currentPage: key,
      selectedApplicantIndex: null
    });
  };

  private getApplicantsListData = async (body: Creteria) => {
    try {
      const list: ListItem[] = await getApplicantsList({
        access: sessionStorage.getItem("access"),
        body: { region: body.region, type: body.type, status: body.status }
      });
      await this.setState({ list });
      await this.setState({
        numberOfPages: Math.ceil(this.state.list.length / 10)
      });
      const currentList: ListItem[] = this.state.list.slice(0, 10);
      await this.setState({ currentList });
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

  private checkCreteriaStatus = () => {
    // boolean 변경된 후 수정
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

    return creteriaStatus;
  };
}

export default AdminPage;
