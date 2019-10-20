import styled from "styled-components";
import CheckBox from "../../assets/admin-page/checkbox.png";

export const UnselectedApplicantListItem = styled.tr`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  -webkit-text-stroke: 0.5px #ffffff;
  font-size: 18px;
  color: #222222;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  cursor: pointer;
`;

export const SelectedApplicantListItem = styled(UnselectedApplicantListItem)`
  background-color: rgba(101, 187, 183, 0.2);
`;

export const TD = styled.td`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const CheckBoxIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-image: url(${CheckBox});
  width: 20px;
  height: 20px;
`;
