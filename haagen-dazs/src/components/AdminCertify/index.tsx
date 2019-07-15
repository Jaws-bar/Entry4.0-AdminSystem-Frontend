import * as React from "react";
import { Redirect } from "react-router-dom";

import * as S from "./style";
import EntryLogo from "../../assets/EntryDSM_LOGO.png";
import { getUserToken } from "../../lib/api";

export interface State {
  inputID: string;
  inputPW: string;
  isLogin: boolean;
}

class AdminCetify extends React.Component<State> {
  state: State = {
    inputID: "",
    inputPW: "",
    isLogin: false
  };

  componentDidMount = () => {
    this.setState(() => {
      if (sessionStorage.accessToken) {
        return { isLogin: true };
      } else {
        return { isLogin: false };
      }
    });
  };

  private inputAuthInfo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [e.target.name]: e.target.value });
  };

  private authInfoSubmit = (): void => {
    if (this.state.inputID !== "" && this.state.inputPW !== "") {
      getUserToken({
        email: this.state.inputID,
        password: this.state.inputPW
      });
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
        <S.CertifyInput
          name="inputID"
          placeholder="ID"
          value={this.state.inputID}
          onChange={this.inputAuthInfo}
        />
        <S.CertifyInput
          name="inputPW"
          placeholder="Password"
          type="password"
          value={this.state.inputPW}
          onChange={this.inputAuthInfo}
        />
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
