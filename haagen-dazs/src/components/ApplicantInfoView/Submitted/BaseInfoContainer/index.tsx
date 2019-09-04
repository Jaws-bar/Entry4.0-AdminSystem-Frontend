import * as React from "react";

import * as S from "./style";

const BaseInfoContainer = () => (
  <S.BaseInfoContainer>
    <S.IdPhoto alt="ID Photo" />
    <S.BaseTextInfoContainer>
      <S.BaseInfoLine>
        <S.BaseInfoName>홍길동</S.BaseInfoName>
        <S.BaseInfo>2004.10.01</S.BaseInfo>
      </S.BaseInfoLine>
      <S.TwoItemsInfoLine>
        <div>
          <S.BaseInfo>대덕소프트웨어마이스터고등학교</S.BaseInfo>
          <S.BaseInfo>졸업예정자</S.BaseInfo>
        </div>
        <S.BaseInfo>마이스터 특별전형</S.BaseInfo>
      </S.TwoItemsInfoLine>
      <S.TwoItemsInfoLine>
        <S.BaseInfo>대전광역시 유성구 장동 76</S.BaseInfo>
        <S.BaseInfo>대덕소프트웨어마이스터고등학교 312호</S.BaseInfo>
      </S.TwoItemsInfoLine>
    </S.BaseTextInfoContainer>
  </S.BaseInfoContainer>
);

export default BaseInfoContainer;
