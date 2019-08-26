import * as React from "react";

import * as S from "./style";

const ThirdAttendanceInfoTR = () => (
  <>
    <S.ThirdAttendanceInfoTR>
      <S.VolunteerTimeTitleTD rowSpan={2}>봉사시간</S.VolunteerTimeTitleTD>
      <S.VolunteerTimeTD rowSpan={2}>120시간</S.VolunteerTimeTD>
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
    </S.ThirdAttendanceInfoTR>
    <S.ThirdAttendanceInfoTR>
      <S.AttendanceDateTD>
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
    </S.ThirdAttendanceInfoTR>
  </>
);

export default ThirdAttendanceInfoTR;
