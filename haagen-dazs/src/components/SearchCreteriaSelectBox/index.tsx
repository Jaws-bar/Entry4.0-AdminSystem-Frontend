import * as React from "react";
import { Component } from "react";

import * as S from "./style";

export interface Props {}

export interface State {}

class SearchCreteriaSelectBox extends React.Component<Props, State> {
  render() {
    return (
      <S.CreteriaSelectWrapper>
        <S.CreteriaCheckboxContainer></S.CreteriaCheckboxContainer>
      </S.CreteriaSelectWrapper>
    );
  }
}

export default SearchCreteriaSelectBox;
