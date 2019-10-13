import * as React from "react";

import * as S from "./style";

interface Props {
  user_email: string;
  final_score: string;
  isNotQEApplicant: boolean;
}

const SecondAdditionalInfoTR: React.FC<Props> = ({
  user_email,
  final_score,
  isNotQEApplicant
}) => (
  <S.SecondAdditionalInfoTR>
    <S.SubtitleTD>이메일</S.SubtitleTD>
    <S.TD>{user_email}</S.TD>
    {isNotQEApplicant ? (
      <S.SubtitleTD>성적 점수</S.SubtitleTD>
    ) : (
      <S.SubtitleTD>검정고시 점수</S.SubtitleTD>
    )}

    <S.TD>{final_score}점</S.TD>
  </S.SecondAdditionalInfoTR>
);

export default SecondAdditionalInfoTR;
