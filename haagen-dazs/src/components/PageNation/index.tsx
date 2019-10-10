import * as React from "react";

import * as S from "./style";

interface Props {
  currentPage: number;
  numberOfPages: number;
  handleClickBackPageBtn: () => void;
  handleClickNextPageBtn: () => void;
  handleClickPageBtn: (key: number) => void;
  changePageIndex: () => void;
  returnNumberOfPages: () => void;
}

const PageNation: React.FC<Props> = ({
  handleClickBackPageBtn,
  handleClickNextPageBtn,
  changePageIndex,
  returnNumberOfPages
}) => (
  <S.pageNationContainer>
    <S.selectedNumberLetter
      onClick={async () => {
        await handleClickBackPageBtn();
        await changePageIndex();
      }}
    >
      {"<"}
    </S.selectedNumberLetter>
    {returnNumberOfPages()}
    <S.selectedNumberLetter
      onClick={async () => {
        await handleClickNextPageBtn();
        await changePageIndex();
      }}
    >
      {">"}
    </S.selectedNumberLetter>
  </S.pageNationContainer>
);

export default PageNation;
