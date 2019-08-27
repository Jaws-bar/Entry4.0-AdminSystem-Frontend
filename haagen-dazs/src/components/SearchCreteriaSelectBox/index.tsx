import * as React from "react";

import * as S from "./style";
import CreteriaSelectCheckbox from "../../components/CreteriaSelectCheckbox";

export interface Props {
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isNotArrivedSelected: boolean;
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
  handleChangeDaejeonCheckbox: () => void;
  handleChangeNationwideCheckbox: () => void;
  handleChangeUnpaidCheckbox: () => void;
  handleChangeNotArrivedCheckbox: () => void;
  handleChangeGeneralCheckbox: () => void;
  handleChangeSocialIntegrationCheckbox: () => void;
  handleChangeMeisterCheckbox: () => void;
}

export interface State {}

class SearchCreteriaSelectBox extends React.Component<Props, State> {
  render() {
    const {
      isDaejeonSelected,
      isNationwideSelected,
      isUnpaidSelected,
      isNotArrivedSelected,
      isGeneralSelected,
      isSocialIntegrationSelected,
      isMeisterSelected,
      handleChangeDaejeonCheckbox,
      handleChangeNationwideCheckbox,
      handleChangeUnpaidCheckbox,
      handleChangeNotArrivedCheckbox,
      handleChangeGeneralCheckbox,
      handleChangeSocialIntegrationCheckbox,
      handleChangeMeisterCheckbox
    } = this.props;
    return (
      <S.CreteriaSelectWrapper>
        <S.CreteriaCheckboxContainer>
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
          <S.CheckBoxSecondLineWrapper>
            <CreteriaSelectCheckbox
              changeHandler={handleChangeGeneralCheckbox}
              checkboxId="general-admission"
              isSelected={isGeneralSelected}
              creteriaText="일반 전형"
            />
            <CreteriaSelectCheckbox
              changeHandler={handleChangeSocialIntegrationCheckbox}
              checkboxId="social-integration-admission"
              isSelected={isSocialIntegrationSelected}
              creteriaText="사회 통합"
            />
            <CreteriaSelectCheckbox
              changeHandler={handleChangeMeisterCheckbox}
              checkboxId="meister-admission"
              isSelected={isMeisterSelected}
              creteriaText="마이스터 전형"
            />
          </S.CheckBoxSecondLineWrapper>
        </S.CreteriaCheckboxContainer>
        <S.ExcelOutputBtn>Excel 출력</S.ExcelOutputBtn>
      </S.CreteriaSelectWrapper>
    );
  }
}

export default SearchCreteriaSelectBox;
