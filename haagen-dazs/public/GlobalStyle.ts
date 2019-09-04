import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from "styled-components";

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/moonspam/NanumBarunGothic@1.0/nanumbarungothicsubset.css");

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html, body, #root{
    width:100%;
    height: 100%;
    font-size: 0;
    font-family: 'NanumBarunGothic';
    min-width: 1360px;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  a {
    &:link{
      color: #000;
      text-decoration: none;
    }
    &:visited{
      color: #000;
      text-decoration: none;
    }
  }

  button {
    all: unset;
    cursor: pointer;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .contact-table tr:first-child td{
    border-right: 0;
  }

  .contact-table tr td:first-child {
  border-left: 0;
}
.contact-table tr:last-child td {
  border-bottom: 0;
}
.contact-table tr td:last-child {
  border-right: 0;
}

.attendance-table tr:first-child td{
    border-right: 0;
  }

  .attendance-table tr td:first-child {
  border-left: 0;
}
.attendance-table tr td:last-child {
  border-right: 0;
}
`;
