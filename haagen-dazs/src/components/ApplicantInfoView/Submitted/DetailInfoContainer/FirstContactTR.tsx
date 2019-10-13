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
  <S.OneContactTR>
    <S.OneContactTitleTD>
      <S.UpperDetailInfo>휴대전화</S.UpperDetailInfo>
    </S.OneContactTitleTD>
    <S.OneContactTD>
      <S.UpperContactInfo>{applicant_tel}</S.UpperContactInfo>
    </S.OneContactTD>
    {school_tel !== undefined ? (
      <>
        <S.TwoContactTitleTD>
          <S.UpperDetailInfo>부모님 휴대전화</S.UpperDetailInfo>
          <S.DetailInfo>학교 전화</S.DetailInfo>
        </S.TwoContactTitleTD>
        <S.TwoContactTd>
          <S.UpperContactInfo>{parent_tel}</S.UpperContactInfo>
          <S.LowerContactInfo>{school_tel}</S.LowerContactInfo>
        </S.TwoContactTd>
      </>
    ) : (
      <>
        <S.GEDParentContactTitleTD>
          <S.UpperContactInfo>부모님 휴대전화</S.UpperContactInfo>
        </S.GEDParentContactTitleTD>
        <S.OneContactTD>
          <S.UpperContactInfo>{parent_tel}</S.UpperContactInfo>
        </S.OneContactTD>
      </>
    )}
  </S.OneContactTR>
);

export default FirstContantTR;
