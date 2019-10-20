import * as React from "react";

import * as S from "./style";
import ApplicantList from "../ApplicantList";
import { ListItem } from "../../pages/AdminPage";

interface Props {
  changeNumberOfPages: (numberOfPages: number) => void;
  currentList: ListItem[];
  handleChangeSelectedIndex: (index: number) => void;
  selectedIndex: number;
  getApplication: (body: { email: string; access: string }) => void;
}

class ApplicantListContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const {
      currentList,
      handleChangeSelectedIndex,
      selectedIndex,
      getApplication
    } = this.props;

    return (
      <S.ApplicantListTable>
        <S.ApplicantListHeader>
          <S.TR>
            <S.TH>접수번호</S.TH>
            <S.TH>이름</S.TH>
            <S.TH>지역</S.TH>
            <S.TH>전형</S.TH>
            <S.TH>원서접수여부</S.TH>
            <S.TH>결제여부</S.TH>
            <S.TH>최종제출</S.TH>
          </S.TR>
        </S.ApplicantListHeader>
        <S.ApplicantListTableBody>
          {currentList.map((item, index) => {
            const applicantData: ListItem = {
              receipt_code: item.receipt_code,
              name: item.name,
              email: item.email,
              region: item.region,
              type: item.type,
              is_printed_application_arrived:
                item.is_printed_application_arrived,
              is_paid: item.is_paid,
              is_final_submit: item.is_final_submit
            };

            return (
              <ApplicantList
                applicantData={applicantData}
                key={index}
                handleChangeSelectedIndex={handleChangeSelectedIndex}
                index={index}
                selectedIndex={selectedIndex}
                getApplication={getApplication}
              />
            );
          })}
        </S.ApplicantListTableBody>
      </S.ApplicantListTable>
    );
  }
}

export default ApplicantListContainer;
