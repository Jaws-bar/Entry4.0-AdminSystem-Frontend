import * as React from "react";

import * as S from "../style";
import CreteriaSelectCheckbox from "../../../components/CreteriaSelectCheckbox";

interface Props {
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
  handleChangeGeneralCheckbox: () => void;
  handleChangeSocialIntegrationCheckbox: () => void;
  handleChangeMeisterCheckbox: () => void;
}

const SecondLineWrapper: React.FC<Props> = ({
  isGeneralSelected,
  isSocialIntegrationSelected,
  isMeisterSelected,
  handleChangeGeneralCheckbox,
  handleChangeSocialIntegrationCheckbox,
  handleChangeMeisterCheckbox
}) => (
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
);

export default SecondLineWrapper;
