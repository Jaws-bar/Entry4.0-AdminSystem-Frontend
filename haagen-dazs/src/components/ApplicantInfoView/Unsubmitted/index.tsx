import * as React from "react";

import * as S from "./style";
import { SubmittedApplication } from "../../../lib/api";

interface Props {
  applicationData: SubmittedApplication;
}

const Unsubmitted: React.FC<Props> = ({ applicationData }) => (
  <S.UnsubmittedWrapper>
    <S.UnsubmittedNotification>
      최종제출이 되지 않은 지원자입니다.
    </S.UnsubmittedNotification>
    <table>
      <tbody>
        <S.UnsubmittedInfoTR>
          <S.UnsubmittedInfoTH>이메일</S.UnsubmittedInfoTH>
          <S.UnsubmittedInfoTD>
            {applicationData.application.user_email}
          </S.UnsubmittedInfoTD>
        </S.UnsubmittedInfoTR>
      </tbody>
    </table>
  </S.UnsubmittedWrapper>
);

export default Unsubmitted;
