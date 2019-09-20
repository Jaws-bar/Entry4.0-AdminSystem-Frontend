import * as React from "react";

import * as S from "./style";
import checked from "../../assets/admin-page/checked.png";

const ApplicantList: React.FC = () => (
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
          <S.TD>
            <S.RealInputCheckBox id="submit-status" />
            <label htmlFor="submit-status">
              <S.CheckBoxIcon>
                <img src={checked} alt="checked" />
              </S.CheckBoxIcon>
            </label>
          </S.TD>
          <S.TD>
            <S.RealInputCheckBox id="payment-status" />
            <label htmlFor="payment-status">
              <S.CheckBoxIcon>
                <img src={checked} alt="checked" />
              </S.CheckBoxIcon>
            </label>
          </S.TD>
          <S.TD>
            <S.RealInputCheckBox id="final-submit-status" />
            <label htmlFor="final-submit-status">
              <S.CheckBoxIcon>
                <img src={checked} alt="checked" />
              </S.CheckBoxIcon>
            </label>
          </S.TD>
        </S.ApplicantListItem>
      </tbody>
    </table>
  </S.ApplicantListWrapper>
);

export default ApplicantList;
