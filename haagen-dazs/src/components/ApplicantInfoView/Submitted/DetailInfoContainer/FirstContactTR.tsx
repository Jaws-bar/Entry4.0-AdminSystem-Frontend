import * as React from "react";

import * as S from "./style";

interface Props {
  parent_tel: string;
  applicant_tel: string;
  school_tel: string;
}

const FirstContantTR: React.FC<Props> = ({
  parent_tel,
  applicant_tel,
  school_tel
}) => (
  <S.FirstContactTR>
    <S.FirstContactTitleTD>
      <S.UpperDetailInfo>휴대전화</S.UpperDetailInfo>
    </S.FirstContactTitleTD>
    <S.FirstContactTD>
      <S.UpperContactInfo>{applicant_tel}</S.UpperContactInfo>
    </S.FirstContactTD>
    <S.SecondContactTitleTD>
      <S.UpperDetailInfo>부모님 휴대전화</S.UpperDetailInfo>
      <S.DetailInfo>학교 전화</S.DetailInfo>
    </S.SecondContactTitleTD>
    <S.SecondContactTd>
      <S.UpperContactInfo>{parent_tel}</S.UpperContactInfo>
      <S.LowerContactInfo>{school_tel}</S.LowerContactInfo>
    </S.SecondContactTd>
  </S.FirstContactTR>
);

export default FirstContantTR;
