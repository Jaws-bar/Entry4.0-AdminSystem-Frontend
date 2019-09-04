import styled from "styled-components";

export const DetailInfoTable = styled.table`
  width: 100%;
  font-size: 16px;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const UpperDetailInfoTable = styled(DetailInfoTable)`
  margin-top: 20px;
`;

export const DetailInfo = styled.p`
  height: 20px;
  text-align: center;
  font-weight: 400;
`;

export const UpperDetailInfo = styled(DetailInfo)`
  margin-bottom: 24px;
`;

export const LowerContactInfo = styled(DetailInfo)`
  font-weight: normal;
  text-align: left;
`;

export const UpperContactInfo = styled(LowerContactInfo)`
  margin-bottom: 24px;
  margin-left: 0;
`;

export const TD = styled.td`
  border: 0.5px solid rgba(101, 187, 183, 0.3);
  text-align: left;
  font-weight: 300;
  padding: 0 16px;
`;

export const VolunteerTimeTD = styled(TD)`
  width: 98px;
`;

export const SubtitleTD = styled.td`
  border: 0.5px solid rgba(101, 187, 183, 0.3);
  text-align: center;
`;

export const FirstContactTD = styled(TD)`
  padding: 48px 16px 32px 16px;
`;

export const SecondContactTd = styled(TD)`
  width: 163px;
`;

export const FirstContactTitleTD = styled(FirstContactTD)`
  width: 81px;
  padding: 48px 0 32px 0;
`;

export const SecondContactTitleTD = styled(FirstContactTD)`
  width: 135px;
  padding: 48px 0 32px 0;
`;

export const VolunteerTimeTitleTD = styled(SubtitleTD)`
  width: 87px;
`;

export const AttendanceDateTD = styled.td`
  width: 172px;
  font-size: 12px;
  border: 0.5px solid rgba(101, 187, 183, 0.3);
  font-weight: 300;
  position: relative;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
  }
`;

export const AttendanceDate = styled.p`
  text-align: right;
`;

export const AttendanceDateTitleTD = styled(SubtitleTD)`
  width: 83px;
`;

export const FirstContactTR = styled.tr`
  height: 142px;
`;

export const SecondAdditionalInfoTR = styled.tr`
  height: 84px;
`;

export const ThirdAttendanceInfoTR = styled.tr`
  height: 42px;
`;
