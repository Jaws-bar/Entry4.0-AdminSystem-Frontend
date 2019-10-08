import * as React from "react";

import * as S from "./style";
import checked from "../../assets/admin-page/checked.png";
interface Props {
  applicantData: {
    code: string;
    name: string;
    region: string;
    type: string;
    arrive: number;
    paid: number;
    submit: number;
  };
  checkApplicantSubmissionStatus: (status: boolean) => void;
}

const checkType = (type: string): string => {
  let returnWord: string = "";

  switch (type) {
    case "common":
      returnWord = "일반전형";
      break;
    case "social":
      returnWord = "사회통합전형";
      break;
    case "meister":
      returnWord = "마이스터전형";
      break;
    default:
      returnWord = "";
  }

  return returnWord;
};

const handleClickListItem = (
  e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
) => {};

const ApplicantList: React.FC<Props> = ({
  applicantData,
  checkApplicantSubmissionStatus
}) => (
  <S.ApplicantListItem
    onClick={e => {
      handleClickListItem(e);
      checkApplicantSubmissionStatus(applicantData.submit === 1 ? true : false);
    }}
  >
    <S.TD>{applicantData.code}</S.TD>
    <S.TD>{applicantData.name}</S.TD>
    <S.TD>{applicantData.region === "daejeon" ? "대전" : "전국"}</S.TD>
    <S.TD>{checkType(applicantData.type)}</S.TD>
    <S.TD>
      <S.CheckBoxIcon>
        {applicantData.arrive === 1 && <img src={checked} alt="checked" />}
      </S.CheckBoxIcon>
    </S.TD>
    <S.TD>
      <S.CheckBoxIcon>
        {applicantData.paid === 1 && <img src={checked} alt="checked" />}
      </S.CheckBoxIcon>
    </S.TD>
    <S.TD>
      <S.CheckBoxIcon>
        {applicantData.submit === 1 && <img src={checked} alt="checked" />}
      </S.CheckBoxIcon>
    </S.TD>
  </S.ApplicantListItem>
);

export default ApplicantList;
