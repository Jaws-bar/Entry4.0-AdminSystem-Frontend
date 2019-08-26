import * as React from "react";

import * as S from "./style";
import FirstContactTR from "./FirstContactTR";
import SecondAdditionalInfoTR from "./SecondAdditionalInfoTR";
import ThirdAttendanceInfoTR from "./ThirdAttendanceInfoTR";

const DetailInfoContainer = () => (
  <>
    <S.UpperDetailInfoTable className="contact-table">
      <tbody>
        <FirstContactTR />
        <SecondAdditionalInfoTR />
      </tbody>
    </S.UpperDetailInfoTable>
    <S.DetailInfoTable className="attendance-table">
      <tbody>
        <ThirdAttendanceInfoTR />
      </tbody>
    </S.DetailInfoTable>
  </>
);

export default DetailInfoContainer;
