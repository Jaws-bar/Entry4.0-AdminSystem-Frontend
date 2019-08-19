import styled from "styled-components";

export const ApplicantListWrapper = styled.div`
  height: calc(100% - 97px);
`;

export const ApplicantListHeader = styled.thead`
  height: 51px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  opacity: 0.87;
  font-size: 14px;
  color: #222222;
`;

export const TR = styled.tr`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
`;

export const TH = styled.th`
  flex: 1;
`;

export const TD = styled.td`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const ApplicantListItem = styled.tr`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  -webkit-text-stroke: 0.5px #ffffff;
  font-size: 18px;
  color: #222222;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
`;
