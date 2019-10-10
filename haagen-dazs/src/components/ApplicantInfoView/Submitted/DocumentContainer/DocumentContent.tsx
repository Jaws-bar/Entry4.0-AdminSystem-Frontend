import * as React from "react";

import * as S from "./style";

interface Props {
  self_introduction: string;
  study_plan: string;
  isIntroductionSelected: boolean;
}

const DocumentContent: React.FC<Props> = ({
  self_introduction,
  study_plan,
  isIntroductionSelected
}) => (
  <S.DocumentContent>
    {isIntroductionSelected ? self_introduction : study_plan}
  </S.DocumentContent>
);

export default DocumentContent;
