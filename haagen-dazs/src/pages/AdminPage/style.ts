import styled from "styled-components";

export const AdminContentContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  overflow-y: hidden;

  display: flex;
`;

export const ApplicantListContainer = styled.div`
  width: 1100px;
  height: calc(100vh - 80px);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fdfdfd;
`;

export const ApplicantInfoView = styled.div`
  width: calc(100% - 1100px);
  background-color: #fdfdfd;
`;
