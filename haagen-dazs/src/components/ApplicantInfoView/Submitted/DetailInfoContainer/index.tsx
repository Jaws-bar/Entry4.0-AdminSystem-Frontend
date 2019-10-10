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
  final_score: string;
  volunteer_time: number;
  full_cut_count: number;
  period_cut_count: number;
  late_count: number;
  early_leave_count: number;
}

const DetailInfoContainer: React.FC<Props> = ({
  applicant_tel,
  parent_tel,
  school_tel,
  user_email,
  final_score,
  volunteer_time,
  full_cut_count,
  period_cut_count,
  late_count,
  early_leave_count
}) => (
  <>
    <S.UpperDetailInfoTable className="contact-table">
      <tbody>
        <FirstContactTR
          applicant_tel={applicant_tel}
          parent_tel={parent_tel}
          school_tel={school_tel}
        />
        <SecondAdditionalInfoTR
          user_email={user_email}
          final_score={final_score}
        />
      </tbody>
    </S.UpperDetailInfoTable>
    <S.DetailInfoTable className="attendance-table">
      <tbody>
        <ThirdAttendanceInfoTR
          volunteer_time={volunteer_time}
          full_cut_count={full_cut_count}
          period_cut_count={period_cut_count}
          late_count={late_count}
          early_leave_count={early_leave_count}
        />
      </tbody>
    </S.DetailInfoTable>
  </>
);

export default DetailInfoContainer;
