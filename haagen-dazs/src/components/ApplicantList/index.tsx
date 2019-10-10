import * as React from "react";

import * as S from "./style";
import checked from "../../assets/admin-page/checked.png";
import { ListItem } from "../../pages/AdminPage";

interface Props {
  applicantData: ListItem;
  handleChangeSelectedIndex: (index: number) => void;
  index: number;
  selectedIndex: number;
  getApplication: (body: { email: string; access: string }) => void;
}

const checkType = (type: string): string => {
  let returnWord: string = "";

  switch (type) {
    case "COMMON":
      returnWord = "일반전형";
      break;
    case "SOCIAL":
      returnWord = "사회통합전형";
      break;
    case "MEISTER":
      returnWord = "마이스터전형";
      break;
    default:
      returnWord = "";
  }

  return returnWord;
};

const ApplicantList: React.FC<Props> = ({
  applicantData,
  handleChangeSelectedIndex,
  index,
  selectedIndex,
  getApplication
}) =>
  selectedIndex === index ? (
    <S.SelectedApplicantListItem
      onClick={() => {
        handleChangeSelectedIndex(index);
        getApplication({
          email: applicantData.email,
          access: sessionStorage.getItem("access")
        });
      }}
    >
      <S.TD>{applicantData.receipt_code}</S.TD>
      <S.TD>{applicantData.name === null ? "미기입" : applicantData.name}</S.TD>
      <S.TD>{applicantData.region === "daejeon" ? "대전" : "전국"}</S.TD>
      <S.TD>{checkType(applicantData.type)}</S.TD>
      <S.TD>
        <S.CheckBoxIcon>
          {applicantData.is_printed_application_arrived && (
            <img src={checked} alt="checked" />
          )}
        </S.CheckBoxIcon>
      </S.TD>
      <S.TD>
        <S.CheckBoxIcon>
          {applicantData.is_paid && <img src={checked} alt="checked" />}
        </S.CheckBoxIcon>
      </S.TD>
      <S.TD>{applicantData.is_final_submit ? "완료" : "미완료"}</S.TD>
    </S.SelectedApplicantListItem>
  ) : (
    <S.UnselectedApplicantListItem
      onClick={() => {
        handleChangeSelectedIndex(index);
        getApplication({
          email: applicantData.email,
          access: sessionStorage.getItem("access")
        });
      }}
    >
      <S.TD>{applicantData.receipt_code}</S.TD>
      <S.TD>{applicantData.name === null ? "미기입" : applicantData.name}</S.TD>
      <S.TD>{applicantData.region === "daejeon" ? "대전" : "전국"}</S.TD>
      <S.TD>{checkType(applicantData.type)}</S.TD>
      <S.TD>
        <S.CheckBoxIcon>
          {applicantData.is_printed_application_arrived && (
            <img src={checked} alt="checked" />
          )}
        </S.CheckBoxIcon>
      </S.TD>
      <S.TD>
        <S.CheckBoxIcon>
          {applicantData.is_paid && <img src={checked} alt="checked" />}
        </S.CheckBoxIcon>
      </S.TD>
      <S.TD>{applicantData.is_final_submit ? "완료" : "미완료"}</S.TD>
    </S.UnselectedApplicantListItem>
  );

export default ApplicantList;
