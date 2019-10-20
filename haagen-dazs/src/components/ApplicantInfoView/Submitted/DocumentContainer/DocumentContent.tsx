import * as React from "react";

import * as S from "./style";
import { checkFalse } from "../../../../utils/checkFalse";

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
    {isIntroductionSelected
      ? checkFalse(self_introduction)
        ? self_introduction
        : "미기입"
      : checkFalse(study_plan)
      ? study_plan
      : "미기입"}
  </S.DocumentContent>
);

export default DocumentContent;
