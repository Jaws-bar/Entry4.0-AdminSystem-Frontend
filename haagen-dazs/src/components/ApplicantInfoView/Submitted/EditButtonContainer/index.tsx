import * as React from "react";
import { Component } from "react";

import * as S from "./style";
import Checked from "../../../../assets/admin-page/checked.png";

interface State {
  isApplicationArrived: boolean;
  isPaymentCompleted: boolean;
}

class EditButtonContainer extends React.Component<any, State> {
  state: State = {
    isApplicationArrived: false,
    isPaymentCompleted: false
  };

  render() {
    return (
      <S.EditButtonWrapper>
        <S.CheckboxTitle>원서도착여부</S.CheckboxTitle>
        <S.StatusCheckbox
          type="checkbox"
          name="ApplicationArrivalStatus"
          id="application-arrival-status"
        />
        <label htmlFor="application-arrival-status">
          <S.ApplicationArrivalCheckBox />
        </label>
        <S.CheckboxTitle>결제여부</S.CheckboxTitle>
        <S.StatusCheckbox
          type="checkbox"
          name="PaymentStatus"
          id="payment-status"
        />
        <label htmlFor="payment-status">
          <S.PaymentCheckBox />
        </label>
        <S.SubmissionCancelBtn>최종제출 취소</S.SubmissionCancelBtn>
      </S.EditButtonWrapper>
    );
  }
}

export default EditButtonContainer;
