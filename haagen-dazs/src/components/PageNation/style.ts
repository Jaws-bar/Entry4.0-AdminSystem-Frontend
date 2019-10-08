import styled from "styled-components";

export const pageNationContainer = styled.div`
  bottom: 0;
  position: absolute;
  right: 50%;
  transform: translate(50%);
  margin-bottom: 62px;
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
