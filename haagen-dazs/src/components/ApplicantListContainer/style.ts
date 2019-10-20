import styled from "styled-components";

export const ApplicantListHeader = styled.thead`
  height: 10%;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  opacity: 0.87;
  font-size: 14px;
  color: #222222;
`;

export const ApplicantListTable = styled.table`
  width: 100%;
  height: calc(100% - 250px);
`;

export const ApplicantListTableBody = styled.tbody`
  height: 90%;
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
