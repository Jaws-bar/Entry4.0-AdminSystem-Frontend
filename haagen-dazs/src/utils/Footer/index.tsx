import * as React from "react";

import * as S from "./style";
import * as C from "./constant";
import FooterLogo from "../../assets/footer-component/logo.png";
import FacebookLogo from "../../assets/footer-component/facebook-logo.png";
import GithubLogo from "../../assets/footer-component/github-logo.png";

const Footer: React.FC = () => (
  <S.FooterWrapper>
    <S.ContentWrapper>
      <S.InfoWrapper>
        <S.FooterLogo src={FooterLogo} alt="Entry Logo" />
        <S.Copyright>{C.COPYLIGHT}</S.Copyright>
        <S.Description>
          {C.TERMS} <br />
          {C.SCHOOL_ADDRESS} <br />
          {C.STAFFROOM_CONTANCT_INFO} &#09;
          {C.ADMINISTRATIVE_CONTACT_INFO} <br />
          {C.REGISTRATION_NUMBER}
        </S.Description>
      </S.InfoWrapper>
      <S.IntroList>
        <S.IntroListItem isTitle={true}>Entry 소개</S.IntroListItem>
        <S.IntroListItem isTitle={false}>시스템 소개</S.IntroListItem>
        <S.IntroListItem isTitle={false}>개발자 소개</S.IntroListItem>
        <li>
          <S.SnsIcon src={FacebookLogo} alt="Facebook Icon" />
          <S.SnsIcon src={GithubLogo} alt="Github Icon" />
        </li>
      </S.IntroList>
    </S.ContentWrapper>
  </S.FooterWrapper>
);

export default Footer;
