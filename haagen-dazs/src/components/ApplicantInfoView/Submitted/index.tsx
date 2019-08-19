import * as React from "react";
import { Component } from "react";
import Checkbox from "../../../assets/admin-page/checkbox.png";

import * as S from "./style";

export interface State {}

class Submitted extends React.Component<any, State> {
  render() {
    return (
      <S.SubmittedWrapper>
        <S.EditButtonWrapper>
          <S.CheckboxTitle>원서 미도착</S.CheckboxTitle>
          <S.CheckBox src={Checkbox} alt="" style={{ marginRight: "24px" }} />
          <S.CheckboxTitle>미납자</S.CheckboxTitle>
          <S.CheckBox src={Checkbox} alt="" style={{ marginRight: "127px" }} />
          <S.SubmissionCancelBtn>최종제출 취소</S.SubmissionCancelBtn>
        </S.EditButtonWrapper>
        <S.IdPhotoContainer alt="ID Photo" />
        <S.BaseInfoContainer>
          <S.BaseInfoIine>
            <S.BaseInfoName>홍길동</S.BaseInfoName>
            <S.BaseInfo>2004.10.01</S.BaseInfo>
          </S.BaseInfoIine>
          <S.BaseInfoIine>
            <S.BaseInfo>대덕중학교 3학년</S.BaseInfo>
            <S.BaseInfo>졸업예정자</S.BaseInfo>
            <S.BaseInfo>마이스터 특별전형</S.BaseInfo>
          </S.BaseInfoIine>
          <S.BaseInfoIine>
            <S.BaseInfo>대전광역시 유성구 장동 76</S.BaseInfo>
            <S.BaseInfo>대덕소프트웨어마이스터고등학교 312호</S.BaseInfo>
          </S.BaseInfoIine>
        </S.BaseInfoContainer>
        <S.DetailInfoTable
          className="contact-table"
          style={{ marginTop: "20px" }}
        >
          <tbody>
            <tr style={{ height: "142px" }}>
              <S.TD style={{ width: "82px" }}>
                <S.DetailInfo>휴대전화</S.DetailInfo>
                <S.DetailInfo>집전화</S.DetailInfo>
              </S.TD>
              <S.TD>
                <S.DetailInfo>010-1234-5678</S.DetailInfo>
                <S.DetailInfo>031-111-2222</S.DetailInfo>
              </S.TD>
              <S.TD style={{ width: "135px" }}>
                <S.DetailInfo>부모님 휴대전화</S.DetailInfo>
                <S.DetailInfo>학교 전화</S.DetailInfo>
              </S.TD>
              <S.TD>
                <S.DetailInfo>010-1234-5678</S.DetailInfo>
                <S.DetailInfo>031-111-2222</S.DetailInfo>
              </S.TD>
            </tr>
            <tr style={{ height: "84px" }}>
              <S.TD style={{ width: "82px" }}>
                <S.DetailInfo>이메일</S.DetailInfo>
              </S.TD>
              <S.TD>
                <S.DetailInfo>dodsfkj@naver.com</S.DetailInfo>
              </S.TD>
              <S.TD>
                <S.DetailInfo>성적 점수</S.DetailInfo>
              </S.TD>
              <S.TD>
                <S.DetailInfo>150점</S.DetailInfo>
              </S.TD>
            </tr>
          </tbody>
        </S.DetailInfoTable>
        <S.DetailInfoTable className="attendance-table">
          <tbody>
            <tr style={{ height: "42px" }}>
              <S.TD rowSpan={2} style={{ width: "82px" }}>
                봉사시간
              </S.TD>
              <S.TD rowSpan={2}>60시간</S.TD>
              <S.TD rowSpan={2}>출석정보</S.TD>
              <S.TD style={{ width: "196px" }}>전체 무단 결석 일수</S.TD>
              <S.TD style={{ width: "196px" }}>전체 무단 조퇴 일수</S.TD>
            </tr>
            <tr style={{ height: "42px" }}>
              <S.TD style={{ borderRight: "0" }}>전체 무단 지각 일수</S.TD>
              <S.TD>전체 무단 결과 일수</S.TD>
            </tr>
          </tbody>
        </S.DetailInfoTable>
      </S.SubmittedWrapper>
    );
  }
}

export default Submitted;
