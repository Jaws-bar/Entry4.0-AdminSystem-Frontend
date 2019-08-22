import styled from "styled-components";

export const DetailInfoTable = styled.table`
  width: 100%;
  font-size: 16px;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const DetailInfo = styled.div`
  height: 20px;
  text-align: center;
`;

export const TD = styled.td`
  border: 0.5px solid rgba(101, 187, 183, 0.3);
  text-align: left;
  font-weight: 300;
  padding: 0 16px;
`;

export const SubtitleTD = styled.td`
  border: 0.5px solid rgba(101, 187, 183, 0.3);
  text-align: center;
`;

export const AttendanceDateTD = styled.td`
  width: 196px;
  font-size: 12px;
  border: 0.5px solid rgba(101, 187, 183, 0.3);
  text-align: left;
  font-weight: 300;
  padding: 4px 16px;
  position: relative;
`;

export const AttendanceDate = styled.p`
  display: inline-block;
  width: 35px;
  text-align: right;
  margin-left: 25px;
`;
