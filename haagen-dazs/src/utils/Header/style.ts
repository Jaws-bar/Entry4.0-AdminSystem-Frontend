import styled from "styled-components";

interface SearchInput {
  isActivation: boolean;
}

interface MenuListItem {
  isActivation: boolean;
}

export const HeaderWrapper = styled.header`
  height: 80px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  display: inline-block;
  width: 1280px;
  display: flex;
  align-items: center;
`;

export const EntryLogo = styled.img`
  display: inline-block;
  margin-right: 150px;
`;

export const SearchInputWrapper = styled.div<SearchInput>`
  width: 480px;
  height: 36px;
  border: solid 0.5px #65bbb7;
  background-color: #ffffff;
  font-size: 12px;
  font-weight: 200;
  line-height: 2;
  letter-spacing: 0.6px;
  color: #292929;
  margin-right: 147px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  ${props => !props.isActivation && "visibility: hidden"};

  > div {
    width: 100%;
    display: flex;
    overflow-x: auto;
    align-items: center;

    &::-webkit-scrollbar {
      display: none !important;
    }

    > span {
      display: inline-flex;
      width: initial;

      > div {
        display: flex;
      }
    }
  }
`;

export const SearchIcon = styled.img`
  display: inline-block;
  margin-right: 16px;
`;

export const MenuList = styled.ul`
  font-size: 16px;
  line-height: 3;
  color: #151515;
  display: flex;
`;

export const MenuListItem = styled.li`
  position: relative;
  margin-right: 54px;
  cursor: pointer;
`;

export const UnderLine = styled.div<MenuListItem>`
  width: 100%;
  height: 6px;
  background-color: #65bbb7;
  position: absolute;
  bottom: 15px;
  z-index: -1000;
  ${props => !props.isActivation && "visibility: hidden"};

  &:hover {
    visibility: visible;
  }
`;

export const LogoutBtn = styled.span`
  width: 110px;
  height: 32px;
  border-radius: 20px;
  background-color: #65bbb7;
  font-size: 16px;
  line-height: 3;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
