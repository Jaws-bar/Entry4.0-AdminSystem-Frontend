import * as React from "react";
import { Redirect } from "react-router-dom";

import * as S from "./style";
import EntryLogo from "../../assets/login-page/EntryDSM_LOGO.png";
import { getUserToken } from "../../lib/api";

export interface State {
  inputID: string;
  inputPW: string;
  isLogin: boolean;
  isFail: boolean;
}

class AdminCetify extends React.Component<any, State> {
  state: State = {
    inputID: "",
    inputPW: "",
    isLogin: false,
    isFail: false
  };

  componentDidMount = (): void =>
    this.setState(() => this.getAccessToeknFromStorage());

  private storageKey: { accessToken: string; refreshToken: string } = {
    accessToken: "accessToken",
    refreshToken: "refreshToken"
  };

  private getAccessToeknFromStorage = (): { isLogin: boolean } => {
    if (
      sessionStorage.getItem(this.storageKey.accessToken) &&
      sessionStorage.getItem(this.storageKey.accessToken) !== null
    )
      return { isLogin: true };
    else return { isLogin: false };
  };

  private handleInputId = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ inputID: e.target.value });

  private handleInputPw = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ inputPW: e.target.value });

  private authInfoSubmit = async () => {
    try {
      if (this.state.inputID && this.state.inputPW) {
        const response = await getUserToken({
          email: this.state.inputID,
          password: this.state.inputPW
        });
        localStorage.setItem(
          this.storageKey.refreshToken,
          response.refreshToken
        );
        sessionStorage.setItem(
          this.storageKey.accessToken,
          response.access_token
        );
        // sessionStorage.setItem("accessToken", response.data.accessToken);
        this.setState({ isLogin: true });
      }
    } catch (error) {
      if (error.response.status === 403) {
        this.setState({ isFail: true });
      } else {
        console.log(error.response);
      }
    }
  };

  render() {
    return this.state.isLogin ? (
      <Redirect to="/" />
    ) : (
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
            value={this.state.inputID}
            onChange={this.handleInputId}
          />
          <S.ErrorMessage isFail={this.state.isFail}>
            아이디 혹은 비밀번호가 일치하지 않습니다.
          </S.ErrorMessage>
        </S.CertifyInputWrapper>

        <S.CertifyInputWrapper>
          <S.CertifyInput
            name="inputPW"
            placeholder="Password"
            type="password"
            value={this.state.inputPW}
            onChange={this.handleInputPw}
          />
        </S.CertifyInputWrapper>

        <S.CertifyBtn
          onClick={this.authInfoSubmit}
          isActivation={
            this.state.inputID !== "" && this.state.inputPW !== ""
              ? true
              : false
          }
        >
          Sign in
        </S.CertifyBtn>
      </S.Container>
    );
  }
}

export default AdminCetify;
