import React from "react";

import * as S from "../style";
import CreteriaSelectCheckbox from "../../../components/CreteriaSelectCheckbox";

interface Props {
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isNotArrivedSelected: boolean;
  handleChangeDaejeonCheckbox: () => void;
  handleChangeNationwideCheckbox: () => void;
  handleChangeUnpaidCheckbox: () => void;
  handleChangeNotArrivedCheckbox: () => void;
}

const FirstLineWrapper: React.FC<Props> = ({
  isDaejeonSelected,
  isNationwideSelected,
  isUnpaidSelected,
  isNotArrivedSelected,
  handleChangeDaejeonCheckbox,
  handleChangeNationwideCheckbox,
  handleChangeUnpaidCheckbox,
  handleChangeNotArrivedCheckbox
}) => (
  <S.CheckBoxFirstLineWrapper>
    <CreteriaSelectCheckbox
      changeHandler={handleChangeDaejeonCheckbox}
      checkboxId="region-daegeon"
      isSelected={isDaejeonSelected}
      creteriaText="대전"
    />
    <CreteriaSelectCheckbox
      changeHandler={handleChangeNationwideCheckbox}
      checkboxId="region-nationwide"
      isSelected={isNationwideSelected}
      creteriaText="전국"
    />
    <CreteriaSelectCheckbox
      changeHandler={handleChangeUnpaidCheckbox}
      checkboxId="unpaid"
      isSelected={isUnpaidSelected}
      creteriaText="미납자"
    />
    <CreteriaSelectCheckbox
      changeHandler={handleChangeNotArrivedCheckbox}
      checkboxId="applicant-not-arrived"
      isSelected={isNotArrivedSelected}
      creteriaText="원서 미도착"
    />
  </S.CheckBoxFirstLineWrapper>
);

export default FirstLineWrapper;
