import styled from "styled-components";
import Checkbox from "../../../../assets/admin-page/checkbox.png";

export const EditButtonWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 52px;
`;

export const CheckboxTitle = styled.span`
  opacity: 0.87;
  font-size: 14px;
  color: #222222;
  margin-right: 8px;
`;

export const SubmissionCancelBtn = styled.button`
  width: 110px;
  height: 100%;
  border-radius: 5px;
  background-color: #65bbb7;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
`;

const CheckBoxIcon = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  background-image: url(${Checkbox});
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const ApplicationArrivalCheckBox = styled(CheckBoxIcon)`
  margin-right: 24px;
`;

export const PaymentCheckBox = styled(CheckBoxIcon)`
  margin-right: 127px;
`;

export const StatusCheckbox = styled.input`
  display: none;
`;
