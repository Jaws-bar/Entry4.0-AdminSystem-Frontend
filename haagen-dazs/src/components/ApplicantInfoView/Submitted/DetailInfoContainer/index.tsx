import * as React from "react";

import * as S from "./style";

const DetailInfoContainer = () => (
  <>
    <S.DetailInfoTable className="contact-table" style={{ marginTop: "20px" }}>
      <tbody>
        <tr style={{ height: "142px" }}>
          <S.SubtitleTD style={{ width: "81px", padding: "48px 0 32px 0" }}>
            <S.DetailInfo style={{ marginBottom: "24px" }}>
              휴대전화
            </S.DetailInfo>
            <S.DetailInfo>집전화</S.DetailInfo>
          </S.SubtitleTD>
          <S.TD style={{ padding: "48px 0 32px 0" }}>
            <S.DetailInfo style={{ marginBottom: "24px" }}>
              010-1234-5678
            </S.DetailInfo>
            <S.DetailInfo>031-111-2222</S.DetailInfo>
          </S.TD>
          <S.SubtitleTD style={{ width: "135px", padding: "48px 0 32px 0" }}>
            <S.DetailInfo style={{ marginBottom: "24px" }}>
              부모님 휴대전화
            </S.DetailInfo>
            <S.DetailInfo>학교 전화</S.DetailInfo>
          </S.SubtitleTD>
          <S.TD style={{ width: "163px", padding: "48px 0 32px 0" }}>
            <S.DetailInfo style={{ marginBottom: "24px" }}>
              010-1234-5678
            </S.DetailInfo>
            <S.DetailInfo>031-111-2222</S.DetailInfo>
          </S.TD>
        </tr>
        <tr style={{ height: "84px" }}>
          <S.SubtitleTD>이메일</S.SubtitleTD>
          <S.TD>dodsfkj@naver.com </S.TD>
          <S.SubtitleTD>성적 점수</S.SubtitleTD>
          <S.TD>150점</S.TD>
        </tr>
      </tbody>
    </S.DetailInfoTable>
    <S.DetailInfoTable className="attendance-table">
      <tbody>
        <tr style={{ height: "42px" }}>
          <S.SubtitleTD rowSpan={2} style={{ width: "81px" }}>
            봉사시간
          </S.SubtitleTD>
          <S.TD rowSpan={2} style={{ width: "90px" }}>
            120시간
          </S.TD>
          <S.SubtitleTD rowSpan={2}>출석정보</S.SubtitleTD>
          <S.AttendanceDateTD>
            전체 무단 결석 일수
            <S.AttendanceDate>
              180 <b>일</b>
            </S.AttendanceDate>
          </S.AttendanceDateTD>
          <S.AttendanceDateTD>
            전체 무단 조퇴 일수
            <S.AttendanceDate>
              180 <b>일</b>
            </S.AttendanceDate>
          </S.AttendanceDateTD>
        </tr>
        <tr style={{ height: "42px" }}>
          <S.AttendanceDateTD style={{ borderRight: "0" }}>
            전체 무단 지각 일수
            <S.AttendanceDate>
              180 <b>일</b>
            </S.AttendanceDate>
          </S.AttendanceDateTD>
          <S.AttendanceDateTD>
            전체 무단 결과 일수
            <S.AttendanceDate>
              180 <b>일</b>
            </S.AttendanceDate>
          </S.AttendanceDateTD>
        </tr>
      </tbody>
    </S.DetailInfoTable>
  </>
);

export default DetailInfoContainer;
