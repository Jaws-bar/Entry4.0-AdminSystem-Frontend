import * as React from "react";

import * as S from "./style";

const ApplicantList = () => (
  <S.ApplicantListWrapper>
    <table style={{ width: "100%" }}>
      <S.ApplicantListHeader>
        <S.TR>
          <S.TH>수험번호</S.TH>
          <S.TH>이름</S.TH>
          <S.TH>지역</S.TH>
          <S.TH>전형</S.TH>
          <S.TH>원서접수여부</S.TH>
          <S.TH>결제여부</S.TH>
          <S.TH>최종제출</S.TH>
        </S.TR>
      </S.ApplicantListHeader>
      <tbody>
        <S.ApplicantListItem>
          <S.TD>123456</S.TD>
          <S.TD>오경태</S.TD>
          <S.TD>전국</S.TD>
          <S.TD>일반 전형</S.TD>
          <S.TD>D</S.TD>
          <S.TD>D</S.TD>
          <S.TD>D</S.TD>
        </S.ApplicantListItem>
      </tbody>
    </table>
  </S.ApplicantListWrapper>
);

export default ApplicantList;
