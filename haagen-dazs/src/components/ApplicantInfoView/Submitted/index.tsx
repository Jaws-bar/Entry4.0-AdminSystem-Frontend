import * as React from "react";

import * as S from "./style";
import BaseInfoContainer from "./BaseInfoContainer";
import DetailInfoContainer from "./DetailInfoContainer";
import DocumentContainer from "./DocumentContainer";
import EditButtonContainer from "./EditButtonContainer";
import { SubmittedApplication } from "../../../lib/api";

interface Props {
  applicationData: SubmittedApplication;
  is_printed_application_arrived: boolean;
  is_paid: boolean;
  handleChangeApplicantPaymentStatus: () => void;
  handleChangeApplicantArrivedStatus: () => void;
}

class Submitted extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const {
      applicationData,
      is_printed_application_arrived,
      is_paid,
      handleChangeApplicantPaymentStatus,
      handleChangeApplicantArrivedStatus
    } = this.props;

    return (
      <S.SubmittedWrapper>
        <EditButtonContainer
          email={applicationData.application.user_email}
          is_printed_application_arrived={is_printed_application_arrived}
          is_paid={is_paid}
          handleChangeApplicantPaymentStatus={
            handleChangeApplicantPaymentStatus
          }
          handleChangeApplicantArrivedStatus={
            handleChangeApplicantArrivedStatus
          }
        />
        <BaseInfoContainer
          email={applicationData.application.user_email}
          apply_type={applicationData.application.apply_type}
          additinal_type={applicationData.application.additional_type}
          name={applicationData.application.name}
          birth_date={applicationData.application.birth_date}
          address={applicationData.application.address}
          school_name={applicationData.application.school_name}
        />
        <DetailInfoContainer
          applicant_tel={applicationData.application.applicant_tel}
          parent_tel={applicationData.application.parent_tel}
          school_tel={applicationData.application.school_tel}
          user_email={applicationData.application.user_email}
          score={applicationData.score}
          volunteer_time={applicationData.application.volunteer_time}
          full_cut_count={applicationData.application.full_cut_count}
          period_cut_count={applicationData.application.period_cut_count}
          late_count={applicationData.application.late_count}
          early_leave_count={applicationData.application.early_leave_count}
          ged_average_score={applicationData.application.ged_average_score}
        />
        <DocumentContainer
          self_introduction={applicationData.application.self_introduction}
          study_plan={applicationData.application.study_plan}
        />
      </S.SubmittedWrapper>
    );
  }
}

export default Submitted;
