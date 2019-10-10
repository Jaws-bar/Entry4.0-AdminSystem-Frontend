import * as React from "react";

import * as S from "./style";
import Table from "./table";
import {
  NumberOfApplicantsDetailItems,
  CompetitonDetatilItems,
  getAllApplicantsStatisticsTable,
  NumberOfApplicantsSortation,
  CompetitonSortation,
  getCompetitionRate
} from "../../lib/api";

interface Props {
  selectedItem: string;
}

interface State {
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

class CompetitionView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      daejeonApplicants: {
        common: 0,
        meister: 0,
        social: 0
      },
      nationApplicants: {
        common: 0,
        meister: 0,
        social: 0
      },
      totalApplicants: {
        daejeon: 0,
        nation: 0
      },
      daejeonCompetition: {
        common: "",
        meister: "",
        social: ""
      },
      nationCompetition: {
        common: "",
        meister: "",
        social: ""
      },
      totalCompetition: {
        daejeon: "",
        nation: "",
        all: ""
      }
    };
  }

  public componentWillMount() {
    this.getAllStatisticsTableItem();
  }

  public render() {
    const {
      daejeonApplicants,
      nationApplicants,
      totalApplicants,
      daejeonCompetition,
      nationCompetition,
      totalCompetition
    } = this.state;
    return (
      <S.CompetitionViewContainer>
        {this.props.selectedItem === "전체" ? (
          <>
            <Table
              daejeonApplicants={daejeonApplicants}
              nationApplicants={nationApplicants}
              totalApplicants={totalApplicants}
              daejeonCompetition={daejeonCompetition}
              nationCompetition={nationCompetition}
              totalCompetition={totalCompetition}
            />
            <S.ExcelOutputBtn>Excel 다운로드</S.ExcelOutputBtn>
          </>
        ) : (
          <>
            <S.CategoryItemWrapper
              style={{ marginBottom: "36px", width: "245px" }}
            >
              <S.CategoryName>경쟁률</S.CategoryName>
              <S.CategoryContent>
                {this.props.selectedItem === "대전"
                  ? `${totalCompetition.daejeon}`
                  : `${totalCompetition.nation}`}
              </S.CategoryContent>
              <S.Underline />
            </S.CategoryItemWrapper>
            <S.CategoryItemWrapper style={{ width: "353px" }}>
              <S.CategoryName>
                {this.props.selectedItem} 지원자 수
              </S.CategoryName>
              <S.CategoryContent>
                {this.props.selectedItem === "대전"
                  ? `${totalApplicants.daejeon}`
                  : ` ${totalApplicants.nation}`}
                명
              </S.CategoryContent>
              <S.Underline />
            </S.CategoryItemWrapper>
          </>
        )}
      </S.CompetitionViewContainer>
    );
  }

  private getAllStatisticsTableItem = async () => {
    try {
      const numOfApplicants: NumberOfApplicantsSortation = await getAllApplicantsStatisticsTable(
        { access: sessionStorage.getItem("access") }
      );
      this.setState({
        daejeonApplicants: numOfApplicants.daejeon,
        nationApplicants: numOfApplicants.nation,
        totalApplicants: numOfApplicants.total
      });
      const competition: CompetitonSortation = await getCompetitionRate({
        access: sessionStorage.getItem("access")
      });
      this.setState({
        daejeonCompetition: competition.daejeon,
        nationCompetition: competition.nation,
        totalCompetition: competition.total
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default CompetitionView;
