import * as React from "react";

import * as S from "./style";

interface Props {
  volunteer_time: number;
  full_cut_count: number;
  period_cut_count: number;
  late_count: number;
  early_leave_count: number;
  ged_average_score: string;
}

const ThirdAttendanceInfoTR: React.FC<Props> = ({
  volunteer_time,
  full_cut_count,
  period_cut_count,
  late_count,
  early_leave_count,
  ged_average_score
}) => (
  <>
    {ged_average_score === undefined ? (
      <>
        <S.ThirdAttendanceInfoTR>
          <S.VolunteerTimeTitleTD rowSpan={2}>봉사시간</S.VolunteerTimeTitleTD>
          <S.VolunteerTimeTD rowSpan={2}>
            <p>{volunteer_time}시간</p>
          </S.VolunteerTimeTD>
          <S.AttendanceDateTitleTD rowSpan={2}>
            출석정보
          </S.AttendanceDateTitleTD>
          <S.AttendanceDateTD>
            <div>
              전체 무단 결석 일수
              <S.AttendanceDate>
                {full_cut_count} <b>일</b>
              </S.AttendanceDate>
            </div>
          </S.AttendanceDateTD>
          <S.AttendanceDateTD>
            <div>
              전체 무단 조퇴 일수
              <S.AttendanceDate>
                {early_leave_count} <b>일</b>
              </S.AttendanceDate>
            </div>
          </S.AttendanceDateTD>
        </S.ThirdAttendanceInfoTR>
        <S.ThirdAttendanceInfoTR>
          <S.AttendanceDateTD>
            <div>
              전체 무단 지각 일수
              <S.AttendanceDate>
                {late_count} <b>일</b>
              </S.AttendanceDate>
            </div>
          </S.AttendanceDateTD>
          <S.AttendanceDateTD>
            <div>
              전체 무단 결과 일수
              <S.AttendanceDate>
                {period_cut_count} <b>일</b>
              </S.AttendanceDate>
            </div>
          </S.AttendanceDateTD>
        </S.ThirdAttendanceInfoTR>
      </>
    ) : (
      <S.ThirdAttendanceInfoTR>
        <S.GEDScoreTitleTD>검정고시 점수</S.GEDScoreTitleTD>
        <S.GEDScoreTD>
          <p>{ged_average_score}점</p>
        </S.GEDScoreTD>
      </S.ThirdAttendanceInfoTR>
    )}
  </>
);

export default ThirdAttendanceInfoTR;
