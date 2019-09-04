import styled from "styled-components";

export const IdPhoto = styled.img`
  width: 150px;
  height: 100%;
  object-fit: contain;
  border-radius: 3px;
  border: solid 2px rgba(101, 187, 183, 0.3);
  margin-right: 6.4%;
`;

export const BaseInfoContainer = styled.div`
  height: 200px;
  display: flex;
`;

export const BaseInfoLine = styled.div`
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

export const BaseInfo = styled.p`
  display: inline;
  font-size: 16px;
  color: #000000;
  margin-right: 12px;
  word-break: keep-all;
`;

export const BaseTextInfoContainer = styled.div`
  width: calc(100% - 150px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

export const TwoItemsInfoLine = styled(BaseInfoLine)`
  flex-direction: column;
  align-items: normal;
  justify-content: center;
  margin-top: 10px;

  > p,
  div {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;
