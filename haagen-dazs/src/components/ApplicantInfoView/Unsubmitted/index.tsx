import * as React from "react";

import * as S from "./style";
import FirstEmailTR from "./FirstEmailTR";
import SecondPhoneNumberTR from "./SecondPhoneNumberTR";
import ThirdSchoolContactTR from "./ThirdSchoolContact";
import FourthParentsContactTR from "./FourthParentsContactTR";

const Unsubmitted: React.FC = () => (
  <S.UnsubmittedWrapper>
    <S.UnsubmittedNotification>
      최종제출이 되지 않은 지원자입니다.
    </S.UnsubmittedNotification>
    <table>
      <tbody>
        <FirstEmailTR />
        <SecondPhoneNumberTR />
        <ThirdSchoolContactTR />
        <FourthParentsContactTR />
      </tbody>
    </table>
  </S.UnsubmittedWrapper>
);

export default Unsubmitted;
