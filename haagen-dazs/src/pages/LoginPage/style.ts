import styled from "styled-components";
import backgroundImg from "../../assets/Background.png";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Background = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 100%;
  background-image: url(${backgroundImg});
  background-size: 750px 100%;
  background-position: center center;
`;

export const BackgroundTitle = styled.h1`
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  line-height: 1.56;
  letter-spacing: 3.2px;
  color: #ffffff;
  margin-bottom: 5%;
`;

export const BackgroundDescription = styled.p`
  font-size: 28px;
  line-height: 2;
  letter-spacing: 0.7px;
  text-align: center;
  color: #ffffff;
`;
