import styled from "styled-components";

export const AdminContentContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  overflow-y: hidden;
  display: flex;
`;

export const ApplicantListContainer = styled.div`
  width: 57.3%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fdfdfd;
  position: relative;
`;

export const ApplicantInfoView = styled.div`
  width: 42.7%;
  background-color: #fdfdfd;
`;

export const unselectedNumberLetter = styled.p`
  width: 30px;
  font-size: 20px;
  font-weight: 300;
  color: #222222;
  display: inline-block;
  text-align: center;
  cursor: pointer;
`;

export const selectedNumberLetter = styled(unselectedNumberLetter)`
  font-weight: bold;
`;
