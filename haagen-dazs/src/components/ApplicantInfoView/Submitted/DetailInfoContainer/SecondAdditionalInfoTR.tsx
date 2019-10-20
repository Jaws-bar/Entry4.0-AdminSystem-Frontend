import * as React from "react";

import * as S from "./style";
import { checkFalse } from "../../../../utils/checkFalse";

interface Props {
  user_email: string;
  final_score: string;
}

const SecondAdditionalInfoTR: React.FC<Props> = ({
  user_email,
  final_score
}) => (
  <S.SecondAdditionalInfoTR>
    <S.SubtitleTD>이메일</S.SubtitleTD>
    <S.TD>{user_email}</S.TD>
    <S.SubtitleTD>성적 점수</S.SubtitleTD>
    <S.TD>{checkFalse(final_score) ? `${final_score}점` : "미기입"}</S.TD>
  </S.SecondAdditionalInfoTR>
);

export default SecondAdditionalInfoTR;
