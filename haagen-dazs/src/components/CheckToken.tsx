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
    if (
      (sessionStorage.getItem("access") === undefined ||
        !sessionStorage.getItem("access")) &&
      !localStorage.getItem("refresh")
    ) {
      this.props.history.push("/login");
    } else if (
      localStorage.getItem("refresh") !== undefined &&
      (sessionStorage.getItem("access") === undefined ||
        sessionStorage.getItem("access") === null)
    ) {
      this.setAccessbyRefresh();
    }
  }

  public render() {
    return this.props.children;
  }

  private setAccessbyRefresh = async () => {
    try {
      const accessToken = await refreshUserToken({
        refresh: localStorage.getItem("refresh")
      });

      sessionStorage.setItem("access", accessToken.access);
    } catch (error) {
      if (error.response.status === 401) {
        this.props.history.push("/login");
      }
    }
  };
}

export default withRouter(CheckToken);
