import * as React from "react";

import { Header } from "../../utils";
import SearchCreteriaSelectBox from "../../components/SearchCreteriaSelectBox";
import ApplicantList from "../../components/ApplicantList";
import Unsubmitted from "../../components/ApplicantInfoView/Unsubmitted";
import Submitted from "../../components/ApplicantInfoView/Submitted";
import * as S from "./style";

export interface State {
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isNotArrivedSelected: boolean;
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
}

class AdminPage extends React.Component<null, State> {
  public state: State = {
    isDaejeonSelected: false,
    isGeneralSelected: false,
    isMeisterSelected: false,
    isNationwideSelected: false,
    isNotArrivedSelected: false,
    isSocialIntegrationSelected: false,
    isUnpaidSelected: false
  };

  public render() {
    const {
      isDaejeonSelected,
      isNationwideSelected,
      isUnpaidSelected,
      isNotArrivedSelected,
      isGeneralSelected,
      isSocialIntegrationSelected,
      isMeisterSelected
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
            <ApplicantList />
          </S.ApplicantListContainer>
          <S.ApplicantInfoView>
            <Submitted />
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
}

export default AdminPage;
