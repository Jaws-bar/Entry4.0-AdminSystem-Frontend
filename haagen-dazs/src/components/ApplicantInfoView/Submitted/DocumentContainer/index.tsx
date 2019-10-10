import * as React from "react";

import DocumentContent from "./DocumentContent";
import DocumentSelectBar from "./DocumentSelectBar";

interface State {
  isIntroductionSelected: boolean;
  isStudyPlanSelected: boolean;
}

interface Props {
  self_introduction: string;
  study_plan: string;
}

class DocumentContainer extends React.Component<Props, State> {
  public state: State = {
    isIntroductionSelected: true,
    isStudyPlanSelected: false
  };

  public render() {
    const { self_introduction, study_plan } = this.props;
    return (
      <>
        <DocumentSelectBar
          handleOnClickIntroduction={this.handleOnClickIntroduction}
          handleOnClickStudyPlan={this.handleOnClickStudyPlan}
          isIntroductionSelected={this.state.isIntroductionSelected}
          isStudyPlanSelected={this.state.isStudyPlanSelected}
        />
        <DocumentContent
          self_introduction={self_introduction}
          study_plan={study_plan}
          isIntroductionSelected={this.state.isIntroductionSelected}
        />
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
