import styled from "styled-components";

export const CompetitionViewContainer = styled.div`
  display: inline-block;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const ExcelOutputBtn = styled.button`
  width: 120px;
  height: 32px;
  margin-top: 24px;
  border-radius: 5px;
  background-color: #65bbb7;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
`;

export const CategoryItemWrapper = styled.div`
  height: 37px;
  display: inline-block;
  position: relative;
`;

export const CategoryName = styled.span`
  font-size: 32px;
  letter-spacing: 1.6px;
  color: #292929;
  margin-right: 48px;
  position: absolute;
  z-index: 100;
`;

export const CategoryContent = styled.span`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1.6px;
  color: #292929;
  position: absolute;
  right: 0;
  z-index: 100;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 15px;
  background-color: #83ceca;
  z-index: 1;
`;
