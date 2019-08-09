import * as React from "react";

import * as S from "./style";
import Table from "./table";

interface Props {
  selectedItem: string;
}

const CompetitionView: React.FC<Props> = props => (
  <S.CompetitionViewContainer>
    {props.selectedItem === "전체" ? (
      <React.Fragment>
        <Table />
        <S.ExcelOutputBtn>Excel 다운로드</S.ExcelOutputBtn>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <S.CategoryItemWrapper style={{ marginBottom: "36px", width: "245px" }}>
          <S.CategoryName>경쟁률</S.CategoryName>
          <S.CategoryContent>187 : 1</S.CategoryContent>
          <S.Underline />
        </S.CategoryItemWrapper>
        <S.CategoryItemWrapper style={{ width: "353px" }}>
          <S.CategoryName>{props.selectedItem} 지원자 수</S.CategoryName>
          <S.CategoryContent>187 명</S.CategoryContent>
          <S.Underline />
        </S.CategoryItemWrapper>
      </React.Fragment>
    )}
  </S.CompetitionViewContainer>
);

export default CompetitionView;
