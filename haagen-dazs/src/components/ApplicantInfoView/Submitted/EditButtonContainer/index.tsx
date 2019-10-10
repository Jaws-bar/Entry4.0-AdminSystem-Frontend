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
          최종제출 취소
        </S.SubmissionCancelBtn>
      </S.EditButtonWrapper>
    );
  }

  private handleOnclickIsArrived = () => {
    changePaidArrivedStatus({
      access: sessionStorage.getItem("access"),
      email: this.props.email,
      status: "1"
    });
  };

  private handleOnclickIsPaymentCompleted = () => {
    changePaidArrivedStatus({
      access: sessionStorage.getItem("access"),
      email: this.props.email,
      status: "0"
    });
  };

  private handleOnclickCancelSubmit = async (body: { email: string }) => {
    try {
      await cancelSubmitApplicant({
        email: body.email,
        access: sessionStorage.getItem("access")
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default EditButtonContainer;
