import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import * as S from "./style";
import Logo from "../../assets/header-component/EntryDSM_LOGO.png";
import SearchIconImg from "../../assets/header-component/ic_search.png";
import HeaderSearchBar from "../../components/HeaderSearchBar";
import { ListItem } from "../../pages/AdminPage";

interface OwnProps {
  isActivation: boolean;
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isNotArrivedSelected: boolean;
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
  isUnsubmittedSelected: boolean;
  handleChangeDaejeonCheckbox: () => void;
  handleChangeNationwideCheckbox: () => void;
  handleChangeUnpaidCheckbox: () => void;
  handleChangeNotArrivedCheckbox: () => void;
  handleChangeGeneralCheckbox: () => void;
  handleChangeSocialIntegrationCheckbox: () => void;
  handleChangeMeisterCheckbox: () => void;
  handleChangeUnsubmittedCheckbox: () => void;
  pageType: "main" | "admin";
  getApplicantsList: () => Promise<void>;
  lastUpdatedList: ListItem[];
  list: ListItem[];
  searchApplicant: (filteredList: ListItem[]) => void;
}

interface State {
  isQnASelected: boolean;
  isStasticsSelected: boolean;
  isApplicantSelected: boolean;
}

type Props = OwnProps & RouteComponentProps;

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isApplicantSelected: false,
      isQnASelected: false,
      isStasticsSelected: false
    };
  }

  public clearStorage = (): void => {
    sessionStorage.clear();
    localStorage.clear();
    this.props.history.push("/login");
  };

  public handleChangeQnAStatus = (): void => {
    this.setState({ isQnASelected: !this.state.isQnASelected });
  };

  public handleChangeStasticsStatus = (): void => {
    this.setState({ isStasticsSelected: !this.state.isStasticsSelected });
  };

  public handleChangeApplicantStatus = (): void => {
    this.setState({ isApplicantSelected: !this.state.isApplicantSelected });
  };

  public render() {
    const {
      isActivation,
      isDaejeonSelected,
      isNationwideSelected,
      isUnpaidSelected,
      isNotArrivedSelected,
      isGeneralSelected,
      isSocialIntegrationSelected,
      isMeisterSelected,
      isUnsubmittedSelected,
      handleChangeDaejeonCheckbox,
      handleChangeNationwideCheckbox,
      handleChangeUnpaidCheckbox,
      handleChangeNotArrivedCheckbox,
      handleChangeGeneralCheckbox,
      handleChangeSocialIntegrationCheckbox,
      handleChangeMeisterCheckbox,
      handleChangeUnsubmittedCheckbox,
      pageType,
      getApplicantsList,
      lastUpdatedList,
      list,
      searchApplicant
    } = this.props;
    return (
      <S.HeaderWrapper>
        <S.ContentWrapper>
          <Link to="/">
            <S.EntryLogo src={Logo} alt="Entry Logo" />
          </Link>
          <S.SearchInputWrapper isActivation={isActivation}>
            <S.SearchIcon src={SearchIconImg} alt="Search Icon" />
            <HeaderSearchBar
              isDaejeonSelected={isDaejeonSelected}
              isNationwideSelected={isNationwideSelected}
              isUnpaidSelected={isUnpaidSelected}
              isNotArrivedSelected={isNotArrivedSelected}
              isGeneralSelected={isGeneralSelected}
              isSocialIntegrationSelected={isSocialIntegrationSelected}
              isMeisterSelected={isMeisterSelected}
              isUnsubmittedSelected={isUnsubmittedSelected}
              handleChangeNationwideCheckbox={handleChangeNationwideCheckbox}
              handleChangeDaejeonCheckbox={handleChangeDaejeonCheckbox}
              handleChangeUnpaidCheckbox={handleChangeUnpaidCheckbox}
              handleChangeNotArrivedCheckbox={handleChangeNotArrivedCheckbox}
              handleChangeGeneralCheckbox={handleChangeGeneralCheckbox}
              handleChangeSocialIntegrationCheckbox={
                handleChangeSocialIntegrationCheckbox
              }
              handleChangeMeisterCheckbox={handleChangeMeisterCheckbox}
              handleChangeUnsubmittedCheckbox={handleChangeUnsubmittedCheckbox}
              getApplicantsList={getApplicantsList}
              lastUpdatedList={lastUpdatedList}
              list={list}
              searchApplicant={searchApplicant}
              pageType={pageType}
            />
          </S.SearchInputWrapper>
          <S.MenuList>
            <S.MenuListItem
              onMouseOver={this.handleChangeStasticsStatus}
              onMouseOut={this.handleChangeStasticsStatus}
            >
              <Link to="/">통계</Link>
              <S.UnderLine
                isActivation={
                  pageType === "main" || this.state.isStasticsSelected
                }
              />
            </S.MenuListItem>
            <S.MenuListItem
              onMouseOver={this.handleChangeApplicantStatus}
              onMouseOut={this.handleChangeApplicantStatus}
            >
              <Link to="/administration">지원자 목록</Link>
              <S.UnderLine
                isActivation={
                  pageType === "admin" || this.state.isApplicantSelected
                }
              />
            </S.MenuListItem>
          </S.MenuList>

          <S.LogoutBtn onClick={this.clearStorage}>로그아웃</S.LogoutBtn>
        </S.ContentWrapper>
      </S.HeaderWrapper>
    );
  }
}

export default withRouter(Header);
