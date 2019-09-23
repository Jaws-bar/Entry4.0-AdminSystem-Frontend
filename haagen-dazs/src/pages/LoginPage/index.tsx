import React, { FC } from "react";

import * as S from "./style";
import AdminCertify from "../../components/AdminCertify";

interface Props {
  setToken: (payload: { accessToken: string; sessionToken: string }) => void;
}

const LoginPage: FC<Props> = ({ setToken }) => (
  <S.LoginContainer>
    <S.Background>
      <S.BackgroundTitle>Welcome!</S.BackgroundTitle>
      <S.BackgroundDescription>
        This is the admin page of <br /> Daedeok Software Meister High School.
      </S.BackgroundDescription>
    </S.Background>
    <AdminCertify setToken={setToken} />
  </S.LoginContainer>
);

export default LoginPage;
