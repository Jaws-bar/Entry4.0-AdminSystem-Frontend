import * as React from "react";
import { Component } from "react";

import DocumentContent from "./DocumentContent";
import DocumentSelectBar from "./DocumentSelectBar";

class DocumentContainer extends React.Component {
  render() {
    return (
      <>
        <DocumentSelectBar />
        <DocumentContent />
      </>
    );
  }
}

export default DocumentContainer;
