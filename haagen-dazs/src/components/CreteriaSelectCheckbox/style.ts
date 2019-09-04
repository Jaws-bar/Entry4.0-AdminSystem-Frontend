import styled from "styled-components";

import CheckBoxImg from "../../assets/admin-page/checkbox.png";

export const CheckBox = styled.div`
  display: inline-flex;
  width: 15px;
  height: 15px;
  background-image: url(${CheckBoxImg});
  margin-right: 3%;
  vertical-align: middle;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const CheckedImg = styled.img`
  width: 8px;
`;

export const UnseenRealCheckBox = styled.input`
  display: none;
`;

export const CreteriaTitle = styled.p`
  display: inline-block;
  font-size: 12px;
  color: #3f3f3f;
  margin-right: 5%;
  cursor: pointer;
  vertical-align: middle;
`;
