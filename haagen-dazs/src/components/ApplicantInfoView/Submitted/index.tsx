import * as React from "react";
import { Component } from "react";

import * as S from "./style";
import BaseInfoContainer from "./BaseInfoContainer";
import DetailInfoContainer from "./DetailInfoContainer";
import DocumentContainer from "./DocumentContainer";
import EditButtonContainer from "./EditButtonContainer";

export interface State {}

class Submitted extends React.Component<any, State> {
  render() {
    return (
      <S.SubmittedWrapper>
        <EditButtonContainer />
        <BaseInfoContainer />
        <DetailInfoContainer />
        <DocumentContainer />
      </S.SubmittedWrapper>
    );
  }
}

export default Submitted;
