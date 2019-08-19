import * as React from "react";

import * as S from "./style";

const Unsubmitted = () => (
  <S.UnsubmittedWrapper>
    <S.UnsubmittedNotification>
      최종제출이 되지 않은 지원자입니다.
    </S.UnsubmittedNotification>
    <table>
      <tbody>
        <S.UnsubmittedInfoTR>
          <S.UnsubmittedInfoTH>이메일</S.UnsubmittedInfoTH>
          <S.UnsubmittedInfoTD>dowapdowari@gmail.com</S.UnsubmittedInfoTD>
        </S.UnsubmittedInfoTR>
        <S.UnsubmittedInfoTR>
          <S.UnsubmittedInfoTH>전화번호</S.UnsubmittedInfoTH>
          <S.UnsubmittedInfoTD>010-1234-5678</S.UnsubmittedInfoTD>
        </S.UnsubmittedInfoTR>
        <S.UnsubmittedInfoTR>
          <S.UnsubmittedInfoTH>학교 전화번호</S.UnsubmittedInfoTH>
          <S.UnsubmittedInfoTD>042-1234-5678</S.UnsubmittedInfoTD>
        </S.UnsubmittedInfoTR>
        <S.UnsubmittedInfoTR>
          <S.UnsubmittedInfoTH>부모님 전화번호</S.UnsubmittedInfoTH>
          <S.UnsubmittedInfoTD>010-1234-5678</S.UnsubmittedInfoTD>
        </S.UnsubmittedInfoTR>
      </tbody>
    </table>
  </S.UnsubmittedWrapper>
);

export default Unsubmitted;
