import * as React from "react";

import * as S from "./style";
import Checked from "../../../../assets/admin-page/checked.png";
import { cancelSubmitApplicant } from "../../../../lib/api";

interface State {
  isApplicationArrived: boolean;
  isPaymentCompleted: boolean;
}

class EditButtonContainer extends React.Component<{}, State> {
  public state: State = {
    isApplicationArrived: false,
    isPaymentCompleted: false
  };

  public render() {
    const { isApplicationArrived, isPaymentCompleted } = this.state;

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
            {isApplicationArrived && <img src={Checked} alt="check icon" />}
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
            {isPaymentCompleted && <img src={Checked} alt="check icon" />}
          </S.PaymentCheckBox>
        </label>
        <S.SubmissionCancelBtn onClick={this.handleOnclickCancelSubmit}>
          최종제출 취소
        </S.SubmissionCancelBtn>
      </S.EditButtonWrapper>
    );
  }

  private handleOnclickIsArrived = () => {
    this.setState({ isApplicationArrived: !this.state.isApplicationArrived });
  };

  private handleOnclickIsPaymentCompleted = () => {
    this.setState({ isPaymentCompleted: !this.state.isPaymentCompleted });
  };

  private handleOnclickCancelSubmit = async () => {
    await cancelSubmitApplicant({ email: "thisis@email.com" });
  };
}

export default EditButtonContainer;
