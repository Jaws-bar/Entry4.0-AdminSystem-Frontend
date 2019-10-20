import * as React from "react";

import * as S from "./style";
import { checkFalse } from "../../../../utils/checkFalse";

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
      <S.UpperContactInfo>
        {checkFalse(applicant_tel) ? applicant_tel : "미기입"}
      </S.UpperContactInfo>
    </S.OneContactTD>
    {school_tel !== undefined ? (
      <>
        <S.TwoContactTitleTD>
          <S.UpperDetailInfo>부모님 휴대전화</S.UpperDetailInfo>
          <S.DetailInfo>학교 전화</S.DetailInfo>
        </S.TwoContactTitleTD>
        <S.TwoContactTd>
          <S.UpperContactInfo>
            {checkFalse(parent_tel) ? parent_tel : "미기입"}
          </S.UpperContactInfo>
          <S.LowerContactInfo>
            {checkFalse(school_tel) ? school_tel : "미기입"}
          </S.LowerContactInfo>
        </S.TwoContactTd>
      </>
    ) : (
      <>
        <S.GEDParentContactTitleTD>
          <S.UpperContactInfo>부모님 휴대전화</S.UpperContactInfo>
        </S.GEDParentContactTitleTD>
        <S.OneContactTD>
          <S.UpperContactInfo>
            {checkFalse(parent_tel) ? parent_tel : "미기입"}
          </S.UpperContactInfo>
        </S.OneContactTD>
      </>
    )}
  </S.OneContactTR>
);

export default FirstContantTR;
