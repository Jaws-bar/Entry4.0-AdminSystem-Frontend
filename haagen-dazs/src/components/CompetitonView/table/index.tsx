import * as React from "react";

import * as S from "./style";
import {
  NumberOfApplicantsDetailItems,
  CompetitonDetatilItems
} from "../../../lib/api";

interface Props {
  daejeonApplicants: NumberOfApplicantsDetailItems;
  nationApplicants: NumberOfApplicantsDetailItems;
  totalApplicants: {
    daejeon: number;
    nation: number;
  };
  daejeonCompetition: CompetitonDetatilItems;
  nationCompetition: CompetitonDetatilItems;
  totalCompetition: {
    daejeon: string;
    nation: string;
    all: string;
  };
}

interface State {
  scoreDistribution: {
    nation: Type;
    daejeon: Type;
  };
}

interface Type {
  common: ScoreCategory;
  meister: ScoreCategory;
  social: ScoreCategory;
}

export interface ScoreCategory {
  70: number;
  80: number;
  90: number;
  100: number;
  110: number;
  120: number;
  130: number;
  140: number;
  150: number;
}

class CompetitionTable extends React.Component<Props, State> {
  public state: State = {
    scoreDistribution: {
      nation: {
        common: {
          70: 0,
          80: 0,
          90: 0,
          100: 0,
          110: 0,
          120: 0,
          130: 0,
          140: 0,
          150: 0
        },
        meister: {
          70: 0,
          80: 0,
          90: 0,
          100: 0,
          110: 0,
          120: 0,
          130: 0,
          140: 0,
          150: 0
        },
        social: {
          70: 0,
          80: 0,
          90: 0,
          100: 0,
          110: 0,
          120: 0,
          130: 0,
          140: 0,
          150: 0
        }
      },
      daejeon: {
        common: {
          70: 0,
          80: 0,
          90: 0,
          100: 0,
          110: 0,
          120: 0,
          130: 0,
          140: 0,
          150: 0
        },
        meister: {
          70: 0,
          80: 0,
          90: 0,
          100: 0,
          110: 0,
          120: 0,
          130: 0,
          140: 0,
          150: 0
        },
        social: {
          70: 0,
          80: 0,
          90: 0,
          100: 0,
          110: 0,
          120: 0,
          130: 0,
          140: 0,
          150: 0
        }
      }
    }
  };

  public componentWillMount() {
    this.getAllScoreDistribution();
  }

  public render() {
    const {
      daejeonApplicants,
      nationApplicants,
      totalApplicants,
      daejeonCompetition,
      nationCompetition,
      totalCompetition
    } = this.props;
    return (
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
              <S.TD>{daejeonApplicants.meister}</S.TD>
              <S.TD>{nationApplicants.meister}</S.TD>
              <S.TD>{daejeonCompetition.meister}</S.TD>
              <S.TD>{nationCompetition.meister}</S.TD>
            </S.TR>
            <S.TR>
              <S.TD>사회통합</S.TD>
              <S.TD>{daejeonApplicants.social}</S.TD>
              <S.TD>{nationApplicants.social}</S.TD>
              <S.TD>{daejeonCompetition.social}</S.TD>
              <S.TD>{nationCompetition.social}</S.TD>
            </S.TR>
            <S.TR>
              <S.TD colSpan={2}>일반</S.TD>
              <S.TD>{daejeonApplicants.common}</S.TD>
              <S.TD>{nationApplicants.common}</S.TD>
              <S.TD>{daejeonCompetition.common}</S.TD>
              <S.TD>{nationCompetition.common}</S.TD>
            </S.TR>
            <S.TR>
              <S.TD colSpan={2}>소계</S.TD>
              <S.TD>{totalApplicants.daejeon}</S.TD>
              <S.TD>{totalApplicants.nation}</S.TD>
              <S.TD>{totalCompetition.daejeon}</S.TD>
              <S.TD>{totalCompetition.nation}</S.TD>
            </S.TR>
            <S.TR>
              <S.TD colSpan={2}>총계</S.TD>
              <S.TD colSpan={2}>
                {totalApplicants.daejeon + totalApplicants.nation}
              </S.TD>
              <S.TD colSpan={2}>{totalCompetition.all}</S.TD>
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
  }
}

export default CompetitionTable;
