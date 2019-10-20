import styled from "styled-components";

export const printDiv = styled.div`
  @media print {
    @page {
      margin: 0;
    }
    body {
      margin: 1.6cm;
    }
  }
`;

export const Page = styled.div`
  width: 95%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  box-sizing: border-box;
`;

export const TicketBody = styled.div`
  display: flex;
  flex-grow: 1;
  width: 28%;
  height: 28%;
  margin: 0 20px;
  flex-direction: column;
  justify-content: space-between;

  > div {
    height: 28px;
    border: 1px solid black;

    p {
      font-size: 10px;
      text-align: center;
    }

    p.big {
      font-size: 12px;
      font-weight: bold;
    }

    p.big.foot {
      line-height: 28px;
    }
  }

  .tickeyBody {
    height: 115px;
    display: flex;

    img {
      width: 40%;
      height: 100%;
      border-right: 1px solid black;
    }

    table {
      width: 60%;
      border-collapse: collapse;
      font-size: 10px;

      tr {
        height: 19.16666666666667px;

        td {
          text-align: center;
          border-bottom: 1px solid black;
          border-right: 1px solid black;
        }

        td.last {
          border-bottom: 0;
        }

        td.n_br {
          border-right: 0;
          font-weight: bold;
          font-size: 10px;
        }
      }
    }
  }
`;

export const printButton = styled.button`
  width: 200px;
  height: 60px;
  background: #f56262;
  color: #fff;
  cursor: pointer;
`;
