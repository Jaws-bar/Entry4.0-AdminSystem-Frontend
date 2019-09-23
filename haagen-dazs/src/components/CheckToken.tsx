import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { refreshUserToken } from "../lib/api";

interface OwnProps {
  token: { accessToken: string; sessionToken: string };
}

type Props = RouteComponentProps & OwnProps;

class CheckToken extends React.Component<Props, null> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    console.log(
      sessionStorage.getItem("access"),
      localStorage.getItem("refresh")
    );
    if (
      sessionStorage.getItem("access") === undefined ||
      !sessionStorage.getItem("access")
    ) {
      this.props.history.push("/login");
    } else if (
      localStorage.getItem("refresh") !== undefined &&
      localStorage.getItem("refresh")
    ) {
      this.setAccessbyRefresh();
    }
  }

  public render() {
    return this.props.children;
  }

  private setAccessbyRefresh = async () => {
    const accessToken = await refreshUserToken({
      refreshToken: localStorage.getItem("refresh")
    });

    sessionStorage.setItem("access", accessToken.access);
  };
}

export default withRouter(CheckToken);
