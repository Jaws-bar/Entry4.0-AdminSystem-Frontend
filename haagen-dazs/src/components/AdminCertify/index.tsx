import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import * as S from "./style";
import EntryLogo from "../../assets/login-page/EntryDSM_LOGO.png";
import { getUserToken } from "../../lib/api";

interface State {
  inputID: string;
  inputPW: string;
  isLogin: boolean;
  isFail: boolean;
}
interface OwnProps {
  setToken: (payload: { accessToken: string; sessionToken: string }) => void;
}

type Props = RouteComponentProps & OwnProps;

class AdminCetify extends React.Component<Props, State> {
  public state: State = {
    inputID: "",
    inputPW: "",
    isFail: false,
    isLogin: false
  };

  private storageKey: { access: string; refresh: string } = {
    access: "access",
    refresh: "refresh"
  };

  public render() {
    const { inputID, inputPW, isFail } = this.state;

    return (
      <S.Container>
        <S.Logo src={EntryLogo} alt="" />
        <S.Title>Sign In</S.Title>
        <S.CertifyDescription>
          지급받은 아이디와 비밀번호를 입력해주세요
        </S.CertifyDescription>
        <S.CertifyInputWrapper>
          <S.CertifyInput
            name="inputID"
            placeholder="ID"
            value={inputID}
            onChange={this.handleInputId}
          />
          <S.ErrorMessage isFail={isFail}>
            아이디 혹은 비밀번호가 일치하지 않습니다.
          </S.ErrorMessage>
        </S.CertifyInputWrapper>

        <S.CertifyInputWrapper>
          <S.CertifyInput
            name="inputPW"
            placeholder="Password"
            type="password"
            value={inputPW}
            onChange={this.handleInputPw}
          />
        </S.CertifyInputWrapper>

        <S.CertifyBtn
          onClick={
            !!(inputID !== "" && inputPW !== "") ? this.authInfoSubmit : null
          }
          isactivation={inputID !== "" && inputPW !== "" ? "true" : "false"}
        >
          Sign in
        </S.CertifyBtn>
      </S.Container>
    );
  }

  private handleInputId = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ inputID: e.target.value });

  private handleInputPw = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ inputPW: e.target.value });

  private authInfoSubmit = async () => {
    try {
      if (this.state.inputID && this.state.inputPW) {
        const response = await getUserToken({
          id: this.state.inputID,
          password: this.state.inputPW
        });
        localStorage.setItem(this.storageKey.refresh, response.refresh);
        sessionStorage.setItem(this.storageKey.access, response.access);

        this.props.setToken({
          accessToken: response.access,
          sessionToken: response.refresh
        });
        this.setState({ isLogin: true });

        await this.props.history.push("/");
      }
    } catch (error) {
      if (error.response.status === 403) {
        this.setState({ isFail: true, isLogin: false });
      } else {
        console.log(error.response);
      }
    }
  };
}

export default withRouter(AdminCetify);
