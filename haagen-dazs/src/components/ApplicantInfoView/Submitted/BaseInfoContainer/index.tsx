import * as React from "react";

import * as S from "./style";
import { pictureRequestUrl } from "../../../../lib/api/endpoint";

interface Props {
  email: string;
  apply_time: string;
  additinal_type: string;
  name: string;
  birth_date: string;
  address: string;
  school_name: string;
}

const BaseInfoContainer: React.FC<Props> = ({
  email,
  apply_time,
  additinal_type,
  name,
  birth_date,
  address,
  school_name
}) => (
  <S.BaseInfoContainer>
    <S.IdPhoto src={`${pictureRequestUrl}/${email}`} alt="ID Photo" />
    <S.BaseTextInfoContainer>
      <S.BaseInfoLine>
        <S.BaseInfoName>{name}</S.BaseInfoName>
        <S.BaseInfo>{birth_date.slice(0, 10)}</S.BaseInfo>
      </S.BaseInfoLine>
      <S.TwoItemsInfoLine>
        <div>
          <S.BaseInfo>{school_name}</S.BaseInfo>
          <S.BaseInfo>졸업예정자</S.BaseInfo>
        </div>
        <S.BaseInfo>
          {apply_time} {additinal_type}
        </S.BaseInfo>
      </S.TwoItemsInfoLine>
      <S.TwoItemsInfoLine>
        <S.BaseInfo>{address}</S.BaseInfo>
      </S.TwoItemsInfoLine>
    </S.BaseTextInfoContainer>
  </S.BaseInfoContainer>
);

export default BaseInfoContainer;
