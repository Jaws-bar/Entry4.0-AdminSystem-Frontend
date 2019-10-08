import * as React from "react";

import * as S from "./style";
import ApplicantList from "../ApplicantList";
import { ListItem } from "../../pages/AdminPage";

interface Props {
  checkApplicantSubmissionStatus: (status: boolean) => void;
  changeNumberOfPages: (numberOfPages: number) => void;
  currentList: ListItem[];
}
const ApplicantListContainer: React.FC<Props> = ({
  checkApplicantSubmissionStatus,
  changeNumberOfPages,
  currentList
}) => (
  <div>
    <table style={{ width: "100%" }}>
      <S.ApplicantListHeader>
        <S.TR>
          <S.TH>수험번호</S.TH>
          <S.TH>이름</S.TH>
          <S.TH>지역</S.TH>
          <S.TH>전형</S.TH>
          <S.TH>원서접수여부</S.TH>
          <S.TH>결제여부</S.TH>
          <S.TH>최종제출</S.TH>
        </S.TR>
      </S.ApplicantListHeader>
      <tbody>
        {currentList.map((item, index) => {
          const applicantData = {
            arrive: item.arrive,
            code: item.code,
            name: item.name,
            paid: item.paid,
            region: item.region,
            submit: item.submit,
            type: item.type
          };

          return (
            <ApplicantList
              applicantData={applicantData}
              key={index}
              checkApplicantSubmissionStatus={checkApplicantSubmissionStatus}
            />
          );
        })}
      </tbody>
    </table>
  </div>
);

export default ApplicantListContainer;
