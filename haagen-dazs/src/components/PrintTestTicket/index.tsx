import React from "react";

import * as S from "./style";
import { getApplicantExamcode } from "../../lib/api";
import { refreshAccessToken } from "../../utils/refreshToken";

export type UserData = Array<{
  exam_code: number;
  name: string;
  school: string;
  is_daejeon: boolean;
  apply_type: string;
  receipt_code: number;
  photo: string;
}>;

interface State {
  userData: UserData[];
}

class PrintOrder extends React.Component<{}, State> {
  public state: State = {
    userData: [
      [
        {
          exam_code: 0,
          name: "",
          school: "",
          is_daejeon: false,
          apply_type: "",
          receipt_code: 0,
          photo: ""
        }
      ]
    ]
  };

  public async componentWillMount() {
    const userData: UserData[] | null = await this.getApplicantsExamcode();

    await (userData !== null && this.setState({ userData }));
  }

  public render() {
    const { userData } = this.state;
    return (
      <>
        <S.printButton onClick={this.printOrder}>
          <div>프린트</div>
        </S.printButton>
        <S.printDiv id="printDiv">
          {userData.map((value, index) => (
            <S.Page key={index}>
              {value.map((data, index) => (
                <S.TicketBody key={index}>
                  <div>
                    <p>2019학년도 대덕소프트웨어마이스터고등학교</p>
                    <p className="big">입학전형 수험표</p>
                  </div>
                  <div className="tickeyBody">
                    <img src={data.photo} alt="사용자 이미지" />
                    <table>
                      <tbody>
                        <tr>
                          <td>수험번호</td>
                          <td className="n_br">{data.exam_code}</td>
                        </tr>
                        <tr>
                          <td>성명</td>
                          <td className="n_br">{data.name}</td>
                        </tr>
                        <tr>
                          <td>출신중학교</td>
                          <td className="n_br">{data.school}</td>
                        </tr>
                        <tr>
                          <td>지역</td>
                          <td className="n_br">
                            {data.is_daejeon ? "대전" : "전국"}
                          </td>
                        </tr>
                        <tr>
                          <td>전형유형</td>
                          <td className="n_br">
                            {this.checkApplyType(data.apply_type)}
                          </td>
                        </tr>
                        <tr>
                          <td className="last">접수번호</td>
                          <td className="last n_br">{data.receipt_code}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p className="big foot">대덕소프트웨어마이스터고등학교장</p>
                  </div>
                </S.TicketBody>
              ))}
            </S.Page>
          ))}
        </S.printDiv>
      </>
    );
  }

  private printOrder = () => {
    const printableElements = document.getElementById("printDiv").innerHTML;
    const orderHtml = `<html><head><title></title></head><body>${printableElements}</body></html>`;
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = orderHtml;
    window.print();
    document.body.innerHTML = oldPage;
  };

  private getApplicantsExamcode = async () => {
    try {
      const userData = await getApplicantExamcode({
        access: sessionStorage.getItem("access")
      });

      return userData;
    } catch (e) {
      if (e.response.status === 401) {
        refreshAccessToken();
        this.getApplicantsExamcode();
      } else {
        console.log(e);
        return null;
      }
    }
  };

  private checkApplyType = (applyType: string) => {
    switch (applyType) {
      case "COMMON":
        return "일반전형";
      case "MEISTER":
        return "마이스터인재전형";
      case "SOCIAL_ONE_PARENT":
      case "SOCIAL_BASIC_LIVING":
      case "SOCIAL_MULTICULTURAL":
      case "SOCIAL_LOWEST_INCOME":
        return "사회통합전형";
      default:
        return "";
    }
  };
}

export default PrintOrder;
