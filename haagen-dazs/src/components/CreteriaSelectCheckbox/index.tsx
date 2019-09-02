import * as React from "react";

import * as S from "./style";
import CheckedIcon from "../../assets/admin-page/checked.png";

interface Props {
  changeHandler: () => void;
  checkboxId: string;
  isSelected: boolean;
  creteriaText: string;
}

const CreteriaSelectCheckbox: React.FC<Props> = ({
  changeHandler,
  checkboxId,
  isSelected,
  creteriaText
}) => (
  <>
    <S.UnseenRealCheckBox
      type="checkbox"
      onChange={() => changeHandler()}
      id={checkboxId}
    />
    <label htmlFor={checkboxId}>
      <S.CheckBox>
        {isSelected && <S.CheckedImg src={CheckedIcon} alt="Checked Icon" />}
      </S.CheckBox>
      <S.CreteriaTitle>{creteriaText}</S.CreteriaTitle>
    </label>
  </>
);

export default CreteriaSelectCheckbox;
