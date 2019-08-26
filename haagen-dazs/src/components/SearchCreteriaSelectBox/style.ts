import styled from "styled-components";

import CheckBoxImg from "../../assets/admin-page/checkbox.png";

export const CreteriaSelectWrapper = styled.div`
  width: 100%;
  height: 97px;
  display: flex;
  padding: 24px 315px 25px 320px;
`;

export const CreteriaCheckboxContainer = styled.div`
  display: inline-block;
  width: calc(100% - 110px);
  height: 50px;
`;

export const CheckBoxFirstLineWrapper = styled.div`
  height: 18px;
`;

export const CheckBoxSecondLineWrapper = styled(CheckBoxFirstLineWrapper)`
  margin-top: 18px;
`;

export const CheckBox = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url(${CheckBoxImg});
  margin-right: 12px;
  vertical-align: top;
  cursor: pointer;
`;

export const UnseenRealCheckBox = styled.input`
  display: none;
`;

export const CreteriaTitle = styled.p`
  display: inline-block;
  font-size: 12px;
  color: #3f3f3f;
  margin-right: 24px;
  cursor: pointer;
`;

export const ExcelOutputBtn = styled.button`
  width: 110px;
  height: 100%;
  border-radius: 5px;
  background-color: #65bbb7;
  font-size: 16px;
  line-height: 3;
  color: #ffffff;
  display: flex;
  justify-content: center;
`;
