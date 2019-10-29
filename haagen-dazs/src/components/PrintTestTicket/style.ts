import styled from "styled-components";

export const printDiv = styled.div`
  @media print {
    overflow-y: visible;
    overflow-x: visible;

    @page {
      margin: 0;
      overflow-y: scroll;
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
      font-size: 6px;
      text-align: center;
    }

    p.big {
      font-size: 9px;
      font-weight: bold;
    }

    p.big.foot {
      line-height: 28px;
    }
  }

  .tickeyBody {
    height: 140px;
    display: flex;

    img {
      width: 30%;
      height: 100%;
      border-right: 1px solid black;
    }

    table {
      width: 70%;
      border-collapse: collapse;
      font-size: 10px;

      tr {
        height: 23.166667px;

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

  > div {
    width: 100%;
    height: 100%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
