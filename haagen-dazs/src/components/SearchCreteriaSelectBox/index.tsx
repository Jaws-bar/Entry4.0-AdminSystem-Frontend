import * as React from "react";

import * as S from "./style";
import FirstLineWrapper from "./LineWrapper/FirstLineWrapper";
import SecondLineWrapper from "./LineWrapper/SecondLineWrapper";
export interface Props {
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isNotArrivedSelected: boolean;
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
  isUnsubmittedSelected: boolean;
  handleChangeDaejeonCheckbox: () => void;
  handleChangeNationwideCheckbox: () => void;
  handleChangeUnpaidCheckbox: () => void;
  handleChangeNotArrivedCheckbox: () => void;
  handleChangeGeneralCheckbox: () => void;
  handleChangeSocialIntegrationCheckbox: () => void;
  handleChangeMeisterCheckbox: () => void;
  handleChangeUnsubmittedCheckbox: () => void;
  getApplicantsList: (body: { email: string; access: string }) => void;
}

const SearchCreteriaSelectBox = ({
  isDaejeonSelected,
  isNationwideSelected,
  isUnpaidSelected,
  isNotArrivedSelected,
  isGeneralSelected,
  isSocialIntegrationSelected,
  isMeisterSelected,
  isUnsubmittedSelected,
  handleChangeDaejeonCheckbox,
  handleChangeNationwideCheckbox,
  handleChangeUnpaidCheckbox,
  handleChangeNotArrivedCheckbox,
  handleChangeGeneralCheckbox,
  handleChangeSocialIntegrationCheckbox,
  handleChangeMeisterCheckbox,
  handleChangeUnsubmittedCheckbox
}) => {
  return (
    <S.CreteriaSelectWrapper>
      <S.CreteriaCheckboxContainer>
        <FirstLineWrapper
          isDaejeonSelected={isDaejeonSelected}
          isNationwideSelected={isNationwideSelected}
          isUnpaidSelected={isUnpaidSelected}
          isNotArrivedSelected={isNotArrivedSelected}
          handleChangeDaejeonCheckbox={handleChangeDaejeonCheckbox}
          handleChangeNationwideCheckbox={handleChangeNationwideCheckbox}
          handleChangeUnpaidCheckbox={handleChangeUnpaidCheckbox}
          handleChangeNotArrivedCheckbox={handleChangeNotArrivedCheckbox}
        />
        <SecondLineWrapper
          isGeneralSelected={isGeneralSelected}
          isSocialIntegrationSelected={isSocialIntegrationSelected}
          isMeisterSelected={isMeisterSelected}
          isUnsubmittedSelected={isUnsubmittedSelected}
          handleChangeGeneralCheckbox={handleChangeGeneralCheckbox}
          handleChangeSocialIntegrationCheckbox={
            handleChangeSocialIntegrationCheckbox
          }
          handleChangeMeisterCheckbox={handleChangeMeisterCheckbox}
          handleChangeUnsubmittedCheckbox={handleChangeUnsubmittedCheckbox}
        />
      </S.CreteriaCheckboxContainer>
      <S.ExcelOutputBtn>Excel 출력</S.ExcelOutputBtn>
    </S.CreteriaSelectWrapper>
  );
};

export default SearchCreteriaSelectBox;
