import * as React from "react";

import * as S from "./style";

const CompetitionTable: React.FC = () => (
  <S.TableContainer>
    <S.TableWrapper style={{ height: "38%" }}>
      <tbody>
        <S.TR>
          <S.TD rowSpan={2} colSpan={2}>
            구분
          </S.TD>
          <S.TD colSpan={2}>지원자</S.TD>
          <S.TD colSpan={2}>경쟁률</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>대전</S.TD>
          <S.TD>전국</S.TD>
          <S.TD>대전</S.TD>
          <S.TD>전국</S.TD>
        </S.TR>
        <S.TR>
          <S.TD rowSpan={2}>특별전형</S.TD>
          <S.TD>마이스터</S.TD>
          <S.TD>80</S.TD>
          <S.TD>80</S.TD>
          <S.TD>1:1</S.TD>
          <S.TD>1:1</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>사회통합</S.TD>
          <S.TD>80</S.TD>
          <S.TD>80</S.TD>
          <S.TD>1:1</S.TD>
          <S.TD>1:1</S.TD>
        </S.TR>
        <S.TR>
          <S.TD colSpan={2}>일반</S.TD>
          <S.TD>80</S.TD>
          <S.TD>80</S.TD>
          <S.TD>1:1</S.TD>
          <S.TD>1:1</S.TD>
        </S.TR>
        <S.TR>
          <S.TD colSpan={2}>소계</S.TD>
          <S.TD>80</S.TD>
          <S.TD>80</S.TD>
          <S.TD>1:1</S.TD>
          <S.TD>1:1</S.TD>
        </S.TR>
        <S.TR>
          <S.TD colSpan={2}>총계</S.TD>
          <S.TD colSpan={2}>80</S.TD>
          <S.TD colSpan={2}>1:1</S.TD>
        </S.TR>
      </tbody>
    </S.TableWrapper>
    <S.WhiteSpace />
    <S.TableWrapper style={{ height: "59.3%" }}>
      <tbody>
        <S.TR>
          <S.TD rowSpan={2}>환산점수</S.TD>
          <S.TD colSpan={3}>전국</S.TD>
          <S.TD colSpan={3}>대전</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>일반전형</S.TD>
          <S.TD>마이스터</S.TD>
          <S.TD>사회통합</S.TD>
          <S.TD>일반전형</S.TD>
          <S.TD>마이스터</S.TD>
          <S.TD>사회통합</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>141~150</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>131~140</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>121~130</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>111~120</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>101~110</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>91~100</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>81~90</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>71~80</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
        <S.TR>
          <S.TD>70이하</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
          <S.TD>0</S.TD>
        </S.TR>
      </tbody>
    </S.TableWrapper>
  </S.TableContainer>
);

export default CompetitionTable;
