import * as React from "react";

import * as S from "./style";

interface Props {
  handleOnClickIntroduction: () => void;
  handleOnClickStudyPlan: () => void;
  isIntroductionSelected: boolean;
  isStudyPlanSelected: boolean;
}

const DocumentSelectBar: React.FC<Props> = ({
  handleOnClickIntroduction,
  handleOnClickStudyPlan,
  isIntroductionSelected,
  isStudyPlanSelected
}) => (
  <S.DocumentSelectBar>
    <ul>
      <S.DocumentSelectItem onClick={handleOnClickIntroduction}>
        자기소개서
        {isIntroductionSelected && <S.SelectUnderline />}
      </S.DocumentSelectItem>
      <S.DocumentSelectItem onClick={handleOnClickStudyPlan}>
        학업계획서
        {isStudyPlanSelected && <S.SelectUnderline />}
      </S.DocumentSelectItem>
    </ul>
  </S.DocumentSelectBar>
);

export default DocumentSelectBar;
