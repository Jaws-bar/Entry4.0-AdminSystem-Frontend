import styled from "styled-components";

export const SubmittedWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 34px 80px;
`;

export const EditButtonWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 58px;
`;

export const CheckboxTitle = styled.span`
  opacity: 0.87;
  font-size: 14px;
  color: #222222;
  margin-right: 8px;
`;

export const SubmissionCancelBtn = styled.button`
  width: 110px;
  height: 100%;
  border-radius: 5px;
  background-color: #65bbb7;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
`;

export const CheckBox = styled.img`
  display: inline-block;
`;

export const BaseInfoContainer = styled.div`
  width: calc(100% - 204px);
  height: 200px;
  display: inline-flex;
  flex-direction: column;
`;

export const IdPhotoContainer = styled.img`
  display: inline-block;
  width: 150px;
  height: 200px;
  border: solid 0.5px #707070;
  margin-right: 54px;
`;

export const BaseInfoIine = styled.div`
  flex: 1;
`;

export const BaseInfoName = styled.span`
  display: inline-block;
  height: 37px;
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

export const DetailInfoTable = styled.table`
  width: 100%;
  font-size: 16px;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const DetailInfo = styled.div`
  height: 20px;
`;

export const TD = styled.td`
  border: 0.5px solid rgba(101, 187, 183, 0.3);
`;
