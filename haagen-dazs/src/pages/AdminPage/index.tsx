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
  lastUpdatedList: ListItem[];
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
    lastUpdatedList: [],
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
      selectedApplicantIndex,
      lastUpdatedList,
      list
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
          lastUpdatedList={lastUpdatedList}
          list={list}
          searchApplicant={this.searchApplicant}
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
            ) : (
              <Submitted
                applicationData={applicationData}
                is_printed_application_arrived={
                  currentList[selectedApplicantIndex]
                    .is_printed_application_arrived
                }
                is_paid={currentList[selectedApplicantIndex].is_paid}
                is_final_submit={
                  currentList[selectedApplicantIndex].is_final_submit
                }
                handleChangeApplicantPaymentStatus={
                  this.handleChangeApplicantPaymentStatus
                }
                handleChangeApplicantArrivedStatus={
                  this.handleChangeApplicantArrivedStatus
                }
                handleChangeSubmittedStatus={this.handleChangeSubmittedStatus}
              />
            )}
          </S.ApplicantInfoView>
        </S.AdminContentContainer>
      </>
    );
  }

  private handleChangeDaejeonCheckbox = async () => {
    await this.checkCreteriaStatus();

    const currentCreteriaStatus: Creteria = this.state.searchCreteriaStatus;
    if (this.state.isDaejeonSelected) {
      const notDaejeon = currentCreteriaStatus;
      delete notDaejeon.region;
    } else {
      const daejeon = currentCreteriaStatus;
      daejeon.region = "daejeon";
    }

    await this.setState({ searchCreteriaStatus: currentCreteriaStatus });

    await this.getApplicantsListData();
    await this.setState({
      isDaejeonSelected: !this.state.isDaejeonSelected
    });

    if (this.state.isDaejeonSelected) {
      this.setState({ isNationwideSelected: false });
    }
  };

  private handleChangeNationwideCheckbox = async () => {
    await this.checkCreteriaStatus();

    const currentCreteriaStatus: Creteria = this.state.searchCreteriaStatus;

    if (this.state.isNationwideSelected) {
      const notNation = currentCreteriaStatus;
      delete notNation.region;
    } else {
      const nation = currentCreteriaStatus;
      nation.region = "nation";
    }

    await this.setState({ searchCreteriaStatus: currentCreteriaStatus });

    await this.getApplicantsListData();
    await this.setState({
      isNationwideSelected: !this.state.isNationwideSelected
    });

    if (this.state.isNationwideSelected) {
      this.setState({ isDaejeonSelected: false });
    }
  };

  private handleChangeUnpaidCheckbox = async () => {
    await this.checkCreteriaStatus();

    const currentCreteriaStatus: Creteria = this.state.searchCreteriaStatus;
    if (this.state.isUnpaidSelected) {
      const unpaid = "0" + currentCreteriaStatus.status.slice(1);

      currentCreteriaStatus.status = unpaid;
    } else {
      const arrived = "1" + currentCreteriaStatus.status.slice(1);
      currentCreteriaStatus.status = arrived;
    }

    await this.setState({ searchCreteriaStatus: currentCreteriaStatus });

    await this.getApplicantsListData();
    await this.setState({
      isUnpaidSelected: !this.state.isUnpaidSelected
    });
  };

  private handleChangeNotArrivedCheckbox = async () => {
    await this.checkCreteriaStatus();

    const currentCreteriaStatus: Creteria = this.state.searchCreteriaStatus;
    if (this.state.isNotArrivedSelected) {
      const notArrived =
        currentCreteriaStatus.status.slice(0, 1) +
        "0" +
        currentCreteriaStatus.status.slice(2);

      currentCreteriaStatus.status = notArrived;
    } else {
      const arrived =
        currentCreteriaStatus.status.slice(0, 1) +
        "1" +
        currentCreteriaStatus.status.slice(2);
      currentCreteriaStatus.status = arrived;
    }

    await this.setState({ searchCreteriaStatus: currentCreteriaStatus });

    await this.getApplicantsListData();
    await this.setState({
      isNotArrivedSelected: !this.state.isNotArrivedSelected
    });
  };

  private handleChangeGeneralCheckbox = async () => {
    await this.checkCreteriaStatus();

    const currentCreteriaStatus: Creteria = this.state.searchCreteriaStatus;
    if (this.state.isGeneralSelected) {
      const notGeneralType = currentCreteriaStatus;
      delete notGeneralType.type;
    } else {
      const generalType = currentCreteriaStatus;
      generalType.type = "common";
    }

    await this.setState({ searchCreteriaStatus: currentCreteriaStatus });

    await this.getApplicantsListData();
    await this.setState({
      isGeneralSelected: !this.state.isGeneralSelected
    });

    if (this.state.isGeneralSelected) {
      this.setState({
        isMeisterSelected: false,
        isSocialIntegrationSelected: false
      });
    }
  };

  private handleChangeSocialIntegrationCheckbox = async () => {
    await this.checkCreteriaStatus();

    const currentCreteriaStatus: Creteria = this.state.searchCreteriaStatus;
    if (this.state.isSocialIntegrationSelected) {
      const notSocialIntegrationType = currentCreteriaStatus;
      delete notSocialIntegrationType.type;
    } else {
      const socialIntegrationType = currentCreteriaStatus;
      socialIntegrationType.type = "social";
    }

    await this.setState({ searchCreteriaStatus: currentCreteriaStatus });

    await this.getApplicantsListData();
    await this.setState({
      isSocialIntegrationSelected: !this.state.isSocialIntegrationSelected
    });

    if (this.state.isSocialIntegrationSelected) {
      this.setState({ isMeisterSelected: false, isGeneralSelected: false });
    }
  };

  private handleChangeMeisterCheckbox = async () => {
    await this.checkCreteriaStatus();

    const currentCreteriaStatus: Creteria = this.state.searchCreteriaStatus;
    if (this.state.isMeisterSelected) {
      const notMeisterType = currentCreteriaStatus;
      delete notMeisterType.type;
    } else {
      const meisterType = currentCreteriaStatus;
      meisterType.type = "meister";
    }

    await this.setState({ searchCreteriaStatus: currentCreteriaStatus });

    await this.getApplicantsListData();
    await this.setState({
      isMeisterSelected: !this.state.isMeisterSelected
    });

    if (this.state.isMeisterSelected) {
      this.setState({
        isGeneralSelected: false,
        isSocialIntegrationSelected: false
      });
    }
  };

  private handleChangeUnsubmittedCheckbox = async () => {
    await this.checkCreteriaStatus();

    const currentCreteriaStatus: Creteria = this.state.searchCreteriaStatus;
    if (this.state.isUnsubmittedSelected) {
      const unsubmitted = currentCreteriaStatus.status.slice(0, 2) + "0";

      currentCreteriaStatus.status = unsubmitted;
    } else {
      const submitted = currentCreteriaStatus.status.slice(0, 2) + "1";
      currentCreteriaStatus.status = submitted;
    }

    await this.setState({ searchCreteriaStatus: currentCreteriaStatus });

    await this.getApplicantsListData();
    await this.setState({
      isUnsubmittedSelected: !this.state.isUnsubmittedSelected
    });
  };

  private handleChangeApplicantPaymentStatus = () => {
    const currentApplicantStatus = this.state.currentList[ this.state.selectedApplicantIndex
];
    currentApplicantStatus.is_paid = !currentApplicantStatus.is_paid;

    const currentList = this.state.currentList;
    currentList[this.state.selectedApplicantIndex] = currentApplicantStatus;

    this.setState({
      currentList
    });
  };

  private handleChangeApplicantArrivedStatus = () => {
    const currentApplicantStatus = this.state.currentList[ this.state.selectedApplicantIndex
];
    currentApplicantStatus.is_printed_application_arrived = !currentApplicantStatus.is_printed_application_arrived;

    const currentList = this.state.currentList;
    currentList[this.state.selectedApplicantIndex] = currentApplicantStatus;

    this.setState({
      currentList
    });
  };

  private handleChangeSubmittedStatus = () => {
    const currentApplicantStatus = this.state.currentList[ this.state.selectedApplicantIndex
];
    currentApplicantStatus.is_final_submit = !currentApplicantStatus.is_final_submit;

    const currentList = this.state.currentList;
    currentList[this.state.selectedApplicantIndex] = currentApplicantStatus;

    this.setState({
      currentList
    });
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

  private searchApplicant = async (filteredList: ListItem[]) => {
    await this.setState({ list: filteredList });
    await this.setState({
      numberOfPages: Math.ceil(this.state.list.length / 10)
    });
    const currentList: ListItem[] = this.state.list.slice(0, 10);

    await this.setState({ currentList });

    await this.changePageIndex();
    await this.setState({ selectedApplicantIndex: null, currentPage: 1 });
  };

  private getApplicantsListData = async () => {
    try {
      const list: ListItem[] = await getApplicantsList({
        access: sessionStorage.getItem("access"),
        body: this.state.searchCreteriaStatus
      });
      await this.setState({ list, lastUpdatedList: list });
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
