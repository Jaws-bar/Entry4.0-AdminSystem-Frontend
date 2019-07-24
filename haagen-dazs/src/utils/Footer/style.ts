import styled from "styled-components";

interface IntroItem {
  isTitle: boolean;
}

export const FooterWrapper = styled.div`
  min-height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #79c2ca;
  color: white;
  text-align: left;
`;

export const ContentWrapper = styled.div`
  display: inline-block;
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 8;
`;

export const FooterLogo = styled.img`
  display: inline-block;
  width: 100px;
  margin-bottom: 5px;
`;

export const Copyright = styled.span`
  margin-bottom: 10px;
  font-size: 9px;
  line-height: 2;
  letter-spacing: -0.23px;
`;

export const Description = styled.span`
  font-size: 10px;
  line-height: 1.8;
  letter-spacing: -0.25px;
`;

export const IntroList = styled.ul`
  flex: 1;
  font-size: 14px;
  line-height: 1.29;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const IntroListItem = styled.li<IntroItem>`
  margin-bottom: 14px;
  color: ${props =>
    props.isTitle ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)"};
`;

export const SnsIcon = styled.img`
  display: inline-block;
  margin: 18px 0 0 12px;
`;
