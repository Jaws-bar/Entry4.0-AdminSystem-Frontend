import * as React from "react";
import { Component } from "react";

import * as S from "./style";

class DocumentContainer extends React.Component {
  render() {
    return (
      <>
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
        <S.DocumentContainer></S.DocumentContainer>
      </>
    );
  }
}

export default DocumentContainer;
