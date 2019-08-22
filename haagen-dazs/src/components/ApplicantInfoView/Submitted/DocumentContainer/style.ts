import styled from "styled-components";

export const DocumentSelectBar = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 40px;
  margin-bottom: 24px;
  border-bottom: solid 0.5px rgba(101, 187, 183, 0.3);
`;

export const DocumentSelectItem = styled.li`
  width: 72px;
  font-size: 16px;
  line-height: 2;
  color: #000000;
  display: inline-block;
  margin-right: 24px;
  position: relative;
  cursor: pointer;
`;

export const SelectUnderline = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: #65bbb7;
  z-index: 1;
`;

export const DocumentContainer = styled.div`
  width: 100%;
  min-height: 100px;
  font-size: 16px;
  font-weight: 300;
  line-height: 2.25;
  text-align: left;
  color: #000000;
`;
