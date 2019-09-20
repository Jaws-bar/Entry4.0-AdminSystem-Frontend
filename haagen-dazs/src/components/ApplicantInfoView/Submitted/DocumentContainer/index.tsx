import * as React from "react";

import DocumentContent from "./DocumentContent";
import DocumentSelectBar from "./DocumentSelectBar";

interface State {
  isIntroductionSelected: boolean;
  isStudyPlanSelected: boolean;
}

class DocumentContainer extends React.Component<{}, State> {
  public state: State = {
    isIntroductionSelected: true,
    isStudyPlanSelected: false
  };

  public render() {
    return (
      <>
        <DocumentSelectBar
          handleOnClickIntroduction={this.handleOnClickIntroduction}
          handleOnClickStudyPlan={this.handleOnClickStudyPlan}
          isIntroductionSelected={this.state.isIntroductionSelected}
          isStudyPlanSelected={this.state.isStudyPlanSelected}
        />
        <DocumentContent />
      </>
    );
  }

  public handleOnClickIntroduction = () => {
    this.setState({ isIntroductionSelected: true, isStudyPlanSelected: false });
  };

  public handleOnClickStudyPlan = () => {
    this.setState({ isIntroductionSelected: false, isStudyPlanSelected: true });
  };
}

export default DocumentContainer;
