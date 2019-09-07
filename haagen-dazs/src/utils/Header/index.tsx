import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import Logo from "../../assets/header-component/EntryDSM_LOGO.png";
import SearchIconImg from "../../assets/header-component/ic_search.png";
import HeaderSearchBar from "../../components/HeaderSearchBar/index";

interface Props {
  isActivation: boolean;
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isNotArrivedSelected: boolean;
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
  handleChangeDaejeonCheckbox: () => void;
  handleChangeNationwideCheckbox: () => void;
  handleChangeUnpaidCheckbox: () => void;
  handleChangeNotArrivedCheckbox: () => void;
  handleChangeGeneralCheckbox: () => void;
  handleChangeSocialIntegrationCheckbox: () => void;
  handleChangeMeisterCheckbox: () => void;
}

const clearStorage = (): void => {
  sessionStorage.clear();
  localStorage.clear();
};

const Header: React.FC<Props> = ({
  isActivation,
  isDaejeonSelected,
  isNationwideSelected,
  isUnpaidSelected,
  isNotArrivedSelected,
  isGeneralSelected,
  isSocialIntegrationSelected,
  isMeisterSelected,
  handleChangeDaejeonCheckbox,
  handleChangeNationwideCheckbox,
  handleChangeUnpaidCheckbox,
  handleChangeNotArrivedCheckbox,
  handleChangeGeneralCheckbox,
  handleChangeSocialIntegrationCheckbox,
  handleChangeMeisterCheckbox
}) => {
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
            handleChangeNationwideCheckbox={handleChangeNationwideCheckbox}
            handleChangeDaejeonCheckbox={handleChangeDaejeonCheckbox}
            handleChangeUnpaidCheckbox={handleChangeUnpaidCheckbox}
            handleChangeNotArrivedCheckbox={handleChangeNotArrivedCheckbox}
            handleChangeGeneralCheckbox={handleChangeGeneralCheckbox}
            handleChangeSocialIntegrationCheckbox={
              handleChangeSocialIntegrationCheckbox
            }
            handleChangeMeisterCheckbox={handleChangeMeisterCheckbox}
          />
        </S.SearchInputWrapper>
        <S.MenuList>
          <S.MenuListItem>
            <Link to="/">Q{"&"}A</Link>
            <S.UnderLine isActivation={true} />
          </S.MenuListItem>
          <S.MenuListItem>
            <Link to="/">통계</Link>
            <S.UnderLine isActivation={true} />
          </S.MenuListItem>
          <S.MenuListItem>
            <Link to="/administration">지원자 목록</Link>
            <S.UnderLine isActivation={true} />
          </S.MenuListItem>
        </S.MenuList>

        <S.LogoutBtn onClick={clearStorage}>로그아웃</S.LogoutBtn>
      </S.ContentWrapper>
    </S.HeaderWrapper>
  );
};
export default Header;
