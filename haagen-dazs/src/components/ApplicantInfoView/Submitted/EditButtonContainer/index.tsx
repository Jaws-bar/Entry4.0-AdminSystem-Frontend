import * as React from "react";

import * as S from "./style";
import Checked from "../../../../assets/admin-page/checked.png";
import {
  cancelSubmitApplicant,
  changePaidArrivedStatus
} from "../../../../lib/api";

interface Props {
  email: string;
  is_printed_application_arrived: boolean;
  is_paid: boolean;
  is_final_submit: boolean;
  handleChangeApplicantPaymentStatus: () => void;
  handleChangeApplicantArrivedStatus: () => void;
  handleChangeSubmittedStatus: () => void;
}

class EditButtonContainer extends React.Component<Props, {}> {
  public render() {
    return (
      <S.EditButtonWrapper>
        <S.CheckboxTitle>원서도착여부</S.CheckboxTitle>
        <S.StatusCheckbox
          type="checkbox"
          name="ApplicationArrivalStatus"
          id="application-arrival-status"
        />
        <label htmlFor="application-arrival-status">
          <S.ApplicationArrivalCheckBox onClick={this.handleOnclickIsArrived}>
            {this.props.is_printed_application_arrived && (
              <img src={Checked} alt="check icon" />
            )}
          </S.ApplicationArrivalCheckBox>
        </label>
        <S.CheckboxTitle>결제여부</S.CheckboxTitle>
        <S.StatusCheckbox
          type="checkbox"
          name="PaymentStatus"
          id="payment-status"
        />
        <label htmlFor="payment-status">
          <S.PaymentCheckBox onClick={this.handleOnclickIsPaymentCompleted}>
            {this.props.is_paid && <img src={Checked} alt="check icon" />}
          </S.PaymentCheckBox>
        </label>
        <S.SubmissionCancelBtn
          onClick={() =>
            this.handleOnclickCancelSubmit({ email: this.props.email })
          }
        >
          {this.props.is_final_submit ? "최종제출 취소" : "최종제출 처리"}
        </S.SubmissionCancelBtn>
      </S.EditButtonWrapper>
    );
  }

  private handleOnclickIsArrived = () => {
    if (window.confirm("원서 도착 여부를 수정하시겠습니까?")) {
      this.props.handleChangeApplicantArrivedStatus();
      changePaidArrivedStatus({
        access: sessionStorage.getItem("access"),
        email: this.props.email,
        status: "1"
      });
    }
  };

  private handleOnclickIsPaymentCompleted = () => {
    if (window.confirm("결제 여부를 수정하시겠습니까?")) {
      this.props.handleChangeApplicantPaymentStatus();
      changePaidArrivedStatus({
        access: sessionStorage.getItem("access"),
        email: this.props.email,
        status: "0"
      });
    }
  };

  private handleOnclickCancelSubmit = async (body: { email: string }) => {
    if (window.confirm("최종제출 여부를 수정하시겠습니까?")) {
      try {
        await cancelSubmitApplicant({
          email: body.email,
          access: sessionStorage.getItem("access")
        });

        this.props.handleChangeSubmittedStatus();
      } catch (error) {
        console.log(error);
      }
    }
  };
}

export default EditButtonContainer;
