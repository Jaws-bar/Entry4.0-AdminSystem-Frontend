import styled from "styled-components";

interface Button {
  isActivation: boolean;
}

interface ErrorCheck {
  isFail: boolean;
}

export const Container = styled.div`
  width: calc(100% - 750px);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 235px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 30px;
  display: inline-block;
`;

export const Title = styled.h1`
  display: inline-block;
  opacity: 0.87;
  font-size: 64px;
  font-weight: bold;
  line-height: 1.56;
  letter-spacing: 3.2px;
  color: #000000;
  margin-bottom: 55px;
`;

export const CertifyDescription = styled.p`
  opacity: 0.6;
  font-size: 18px;
  font-weight: 300;
  line-height: 3.11;
  letter-spacing: 0.45px;
  color: #000000;
  margin-bottom: 20px;
`;

export const CertifyInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  background-color: #eaf7f7;
  margin-bottom: 30px;
`;

export const CertifyInput = styled.input`
  flex: 6;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  opacity: 0.6;
  font-size: 18px;
  font-weight: 300;
  line-height: 3.11;
  letter-spacing: 0.45px;
  color: #000000;
  padding-left: 40px;
`;

export const ErrorMessage = styled.span<ErrorCheck>`
  flex: 4;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 300;
  color: #7e0000;
  cursor: default;
  ${props => (props.isFail ? "display: inline" : "visibility: hidden")};
`;

export const CertifyBtn = styled.button<Button>`
  width: 100%;
  height: 100px;
  opacity: ${props => (props.isActivation ? "1" : "0.5")};
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  background-color: #65bbb7;
  font-size: 28px;
  font-weight: bold;
  line-height: 3.57;
  letter-spacing: 1.4px;
  text-align: center;
  color: #ffffff;
  border: none;
  margin-top: 48px;
  cursor: ${props => (props.isActivation ? "pointer" : "default")};
`;
