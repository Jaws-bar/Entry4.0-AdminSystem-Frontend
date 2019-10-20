import * as React from "react";

import * as S from "./style";
import FirstContactTR from "./FirstContactTR";
import SecondAdditionalInfoTR from "./SecondAdditionalInfoTR";
import ThirdAttendanceInfoTR from "./ThirdAttendanceInfoTR";

interface Props {
  applicant_tel: string;
  parent_tel: string;
  school_tel: string;
  user_email: string;
  score: string;
  volunteer_time: number;
  full_cut_count: number;
  period_cut_count: number;
  late_count: number;
  early_leave_count: number;
  ged_average_score: string;
}

const DetailInfoContainer: React.FC<Props> = ({
  applicant_tel,
  parent_tel,
  school_tel,
  user_email,
  score,
  volunteer_time,
  full_cut_count,
  period_cut_count,
  late_count,
  early_leave_count,
  ged_average_score
}) => (
  <>
    <S.UpperDetailInfoTable className="contact-table">
      <tbody>
        <FirstContactTR
          applicant_tel={applicant_tel}
          parent_tel={parent_tel}
          school_tel={school_tel}
        />
        <SecondAdditionalInfoTR user_email={user_email} final_score={score} />
      </tbody>
    </S.UpperDetailInfoTable>
    {volunteer_time !== null &&
      full_cut_count !== null &&
      period_cut_count !== null &&
      late_count !== null &&
      early_leave_count !== null && (
        <S.DetailInfoTable className="attendance-table">
          <tbody>
            <ThirdAttendanceInfoTR
              volunteer_time={volunteer_time}
              full_cut_count={full_cut_count}
              period_cut_count={period_cut_count}
              late_count={late_count}
              early_leave_count={early_leave_count}
              ged_average_score={ged_average_score}
            />
          </tbody>
        </S.DetailInfoTable>
      )}
  </>
);

export default DetailInfoContainer;
