import * as React from "react";

import * as S from "./style";

const FirstContantTR = () => (
  <S.FirstContactTR>
    <S.FirstContactTitleTD>
      <S.UpperDetailInfo>휴대전화</S.UpperDetailInfo>
      <S.DetailInfo>집전화</S.DetailInfo>
    </S.FirstContactTitleTD>
    <S.FirstContactTD>
      <S.UpperContactInfo>010-1234-5678</S.UpperContactInfo>
      <S.LowerContactInfo>031-111-2222</S.LowerContactInfo>
    </S.FirstContactTD>
    <S.SecondContactTitleTD>
      <S.UpperDetailInfo>부모님 휴대전화</S.UpperDetailInfo>
      <S.DetailInfo>학교 전화</S.DetailInfo>
    </S.SecondContactTitleTD>
    <S.SecondContactTd>
      <S.UpperContactInfo>010-1234-5678</S.UpperContactInfo>
      <S.LowerContactInfo>031-111-2222</S.LowerContactInfo>
    </S.SecondContactTd>
  </S.FirstContactTR>
);

export default FirstContantTR;
