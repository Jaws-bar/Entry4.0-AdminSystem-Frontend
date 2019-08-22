import styled from "styled-components";

export const IdPhoto = styled.img`
  width: 150px;
  height: 100%;
  border: solid 0.5px #707070;
  margin-right: 54px;
`;

export const BaseInfoContainer = styled.div`
  height: 200px;
  display: flex;
`;

export const BaseInfoIine = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const BaseInfoName = styled.p`
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
  margin-right: 18px;
`;

export const BaseInfo = styled.span`
  font-size: 16px;
  color: #000000;
  margin-right: 12px;
`;

export const BaseTextInfoContainer = styled.div`
  width: calc(100% - 150px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;
