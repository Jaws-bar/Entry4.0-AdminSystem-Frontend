import * as React from "react";
import * as S from "./style";
import axios from "axios";
import { Redirect } from "react-router-dom";
import EntryLogo from "../../assets/EntryDSM_LOGO.png";

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
      if (localStorage.accessToken) {
        return { isLogin: true };
      } else {
        return { isLogin: false };
      }
    });
  };

  private inputAuthInfo = (e): void => {
    this.setState({ [e.target.name]: e.target.value });
  };

  private authInfoSubmit = (): void => {
    if (this.state.inputID !== "" && this.state.inputPW !== "") {
      axios
        .post("https://api.entrydsm.hs.kr/api/v1/admin/login", {
          email: this.state.inputID,
          password: this.state.inputPW
        })
        .then(res => {
          localStorage.setItem("accessToken", res.data.access);
          localStorage.setItem("refreshToken", res.data.refresh);
          this.setState(() => ({ isLogin: true }));
        })
        .catch(error => console.log(error));
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
