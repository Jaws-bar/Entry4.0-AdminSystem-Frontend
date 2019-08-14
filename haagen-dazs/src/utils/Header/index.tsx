import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import Logo from "../../assets/header-component/EntryDSM_LOGO.png";
import SearchIconImg from "../../assets/header-component/ic_search.png";

const clearStorage = (): void => {
  sessionStorage.clear();
  localStorage.clear();
};

const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.ContentWrapper>
        <Link to="/">
          <S.EntryLogo src={Logo} alt="Entry Logo" />
        </Link>
        <S.SearchInputWrapper isActivation={true}>
          <S.SearchIcon src={SearchIconImg} alt="Search Icon" />
          <S.SearchInput placeholder="검색어를 입력해주세요." />
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
