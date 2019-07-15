import React from "react";
import * as S from "./style";

import AdminCertify from "../../components/AdminCertify";

const LoginPage = () => (
  <S.LoginContainer>
    <S.Background>
      <S.BackgroundTitle>Welcome!</S.BackgroundTitle>
      <S.BackgroundDescription>
        This is the admin page of <br /> Daedeok Software Meister High School.
      </S.BackgroundDescription>
    </S.Background>
    <AdminCertify inputID="" inputPW="" isLogin={false} />
  </S.LoginContainer>
);

export default LoginPage;
