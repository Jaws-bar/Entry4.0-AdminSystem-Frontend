import * as React from "react";
import { Component } from "react";

import * as S from "./style";

export interface Props {
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isApplicantNotArrivedSelected: boolean;
  isGeneralAdmissionSelected: boolean;
  isSocialIntegrationAdmissionSelected: boolean;
  isMeisterAdmissionSelected: boolean;
}

export interface State {}

class SearchCreteriaSelectBox extends React.Component<Props, State> {
  render() {
    return (
      <S.CreteriaSelectWrapper>
        <S.CreteriaCheckboxContainer>
          <S.CheckBoxFirstLineWrapper>
            <S.UnseenRealCheckBox
              type="checkbox"
              name="RegionDaegeon"
              id="region-daegeon"
            />
            <label htmlFor="region-daegeon">
              <S.CheckBox />
              <S.CreteriaTitle>대전</S.CreteriaTitle>
            </label>
            <S.UnseenRealCheckBox
              type="checkbox"
              name="RegioNationwide"
              id="region-nationwide"
            />

            <label htmlFor="region-nationwide">
              <S.CheckBox />
              <S.CreteriaTitle>전국</S.CreteriaTitle>
            </label>
            <S.UnseenRealCheckBox type="checkbox" name="Unpaid" id="unpaid" />

            <label htmlFor="unpaid">
              <S.CheckBox />
              <S.CreteriaTitle>미납자</S.CreteriaTitle>
            </label>
            <S.UnseenRealCheckBox
              type="checkbox"
              name="ApplicantNotArrived"
              id="applicant-not-arrived"
            />

            <label htmlFor="applicant-not-arrived">
              <S.CheckBox />
              <S.CreteriaTitle>원서 미도착</S.CreteriaTitle>
            </label>
          </S.CheckBoxFirstLineWrapper>
          <S.CheckBoxSecondLineWrapper>
            <S.UnseenRealCheckBox
              type="checkbox"
              name="GeneralAdmission"
              id="general-admission"
            />

            <label htmlFor="general-admission">
              <S.CheckBox />
              <S.CreteriaTitle>일반 전형</S.CreteriaTitle>
            </label>
            <S.UnseenRealCheckBox
              type="checkbox"
              name="SocialIntegrationAdmission"
              id="social-integration-admission"
            />

            <label htmlFor="social-integration-admission">
              <S.CheckBox />
              <S.CreteriaTitle>사회 통합</S.CreteriaTitle>
            </label>
            <S.UnseenRealCheckBox
              type="checkbox"
              name="MeisterAdmission"
              id="meister-admission"
            />

            <label htmlFor="meister-admission">
              <S.CheckBox />
              <S.CreteriaTitle>마이스터 전형</S.CreteriaTitle>
            </label>
          </S.CheckBoxSecondLineWrapper>
        </S.CreteriaCheckboxContainer>
        <S.ExcelOutputBtn>Excel 출력</S.ExcelOutputBtn>
      </S.CreteriaSelectWrapper>
    );
  }
}

export default SearchCreteriaSelectBox;
