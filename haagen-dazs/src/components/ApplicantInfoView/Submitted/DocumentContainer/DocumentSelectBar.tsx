import * as React from "react";

import * as S from "./style";

const DocumentSelectBar: React.FC = () => (
  <S.DocumentSelectBar>
    <ul>
      <S.DocumentSelectItem>
        자기소개서 <S.SelectUnderline />
      </S.DocumentSelectItem>
      <S.DocumentSelectItem>
        학업계획서
        <S.SelectUnderline />
      </S.DocumentSelectItem>
    </ul>
  </S.DocumentSelectBar>
);

export default DocumentSelectBar;
