import * as React from "react";

import * as S from "./style";

interface Props {
  currentPage: number;
  numberOfPages: number;
  handleClickBackPageBtn: () => void;
  handleClickNextPageBtn: () => void;
  handleClickPageBtn: (key: number) => void;
}

interface State {
  numberOfPagesArray: number[];
}

class PageNation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      numberOfPagesArray: []
    };
  }

  public componentWillMount() {
    this.changePageIndex();
  }

  public render() {
    const {
      handleClickBackPageBtn,
      handleClickNextPageBtn,
      handleClickPageBtn
    } = this.props;

    return (
      <S.pageNationContainer>
        <S.selectedNumberLetter
          onClick={async () => {
            await handleClickBackPageBtn();
            await this.changePageIndex();
          }}
        >
          {"<"}
        </S.selectedNumberLetter>
        {this.state.numberOfPagesArray.map((i, index) =>
          this.state.numberOfPagesArray[index] === this.props.currentPage ? (
            <S.selectedNumberLetter
              key={index}
              onClick={async () => {
                await handleClickPageBtn(i);
                await this.changePageIndex();
              }}
            >
              {i}
            </S.selectedNumberLetter>
          ) : (
            <S.unselectedNumberLetter
              key={index}
              onClick={async () => {
                await handleClickPageBtn(i);
                await this.changePageIndex();
              }}
            >
              {i}
            </S.unselectedNumberLetter>
          )
        )}
        <S.selectedNumberLetter
          onClick={async () => {
            await handleClickNextPageBtn();
            await this.changePageIndex();
          }}
        >
          {">"}
        </S.selectedNumberLetter>
      </S.pageNationContainer>
    );
  }

  private range(start: number, end: number): number[] {
    const array: number[] = [];
    let pageNum: number = start;

    for (let i = 0; i < end - start; i += 1) {
      array[i] = pageNum;
      pageNum += 1;
    }

    return array;
  }

  private changePageIndex = (): void => {
    if (this.props.numberOfPages < 6) {
      this.setState({
        numberOfPagesArray: this.range(1, this.props.numberOfPages + 1)
      });
    } else {
      if (this.props.currentPage <= 3) {
        this.setState({
          numberOfPagesArray: this.range(1, 6)
        });
      } else if (this.props.currentPage > this.props.numberOfPages - 3) {
        this.setState({
          numberOfPagesArray: this.range(
            this.props.numberOfPages - 4,
            this.props.numberOfPages + 1
          )
        });
      } else {
        this.setState({
          numberOfPagesArray: this.range(
            this.props.currentPage - 2,
            this.props.currentPage + 3
          )
        });
      }
    }
  };
}

export default PageNation;
