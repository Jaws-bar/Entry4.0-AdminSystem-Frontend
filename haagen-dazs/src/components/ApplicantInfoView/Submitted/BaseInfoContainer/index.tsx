import * as React from "react";

import * as S from "./style";
import { getApplicantIdPhotoApi } from "../../../../lib/api";

interface Props {
  email: string;
  apply_type: string;
  additinal_type: string;
  name: string;
  birth_date: string;
  address: string;
  school_name: string;
}

const checkApplyType = (apply_type: string): string => {
  switch (apply_type) {
    case "COMMON":
      return "일반전형";
    case "MEISTER":
      return "마이스터전형";
    case "SOCIAL_ONE_PARENT":
      return "사회통합전형 한부모가족보호대상자";
    case "SOCIAL_FROM_NORTH":
      return "사회통합전형 북한이탈주민";
    case "SOCIAL_MULTICULTURAL":
      return "사회통합전형 다문화가정";
    case "SOCIAL_BASE_LIVING":
      return "기초생활수급권자";
    case "SOCIAL_LOWEST_INCOME":
      return "차상위계층";
    case "SOCIAL_TEEN_HOUSEHOLDER":
      return "사회통합전형 소년소녀가장";
    default:
      return "";
  }
};

const checkAdditionalType = (additional_type: string): string => {
  switch (additional_type) {
    case "NOT_APPLICABLE":
      return "";
    case "PRIVILEGED_ADMISSION":
      return "특례입학대상자";
    case "NATIONAL_MERIT":
      return "국가유공자자녀";
    default:
      return "";
  }
};

const BaseInfoContainer: React.FC<Props> = ({
  apply_type,
  additinal_type,
  name,
  birth_date,
  address,
  school_name,
  email
}) => {
  const [photo, setPhoto] = React.useState("");

  const getApplicantIdPhoto = React.useCallback(async () => {
    try {
      const response = await getApplicantIdPhotoApi({ email });

      const photo = URL.createObjectURL(new Blob([response]));
      setPhoto(photo);
    } catch (e) {
      console.log(e);
    }
  },                                            [email]);

  React.useEffect(() => {
    getApplicantIdPhoto();
  },              [email]);

  return (
    <S.BaseInfoContainer>
      <S.IdPhoto src={photo} alt="ID Photo" />
      <S.BaseTextInfoContainer>
        <S.BaseInfoLine>
          <S.BaseInfoName>{name}</S.BaseInfoName>
          <S.BaseInfo>{birth_date && birth_date.slice(0, 10)}</S.BaseInfo>
        </S.BaseInfoLine>
        {additinal_type === "NOT_APPLICABLE" ? (
          <S.BaseInfoLine>
            {school_name === undefined ? (
              <S.BaseInfo>검정고시</S.BaseInfo>
            ) : (
              <S.BaseInfo>{school_name}</S.BaseInfo>
            )}
            <S.BaseInfo>{checkApplyType(apply_type)}</S.BaseInfo>
          </S.BaseInfoLine>
        ) : (
          <S.TwoItemsInfoLine>
            {school_name === undefined ? (
              <S.BaseInfo>검정고시 {checkApplyType(apply_type)}</S.BaseInfo>
            ) : (
              <S.BaseInfo>
                {school_name} {checkApplyType(apply_type)}
              </S.BaseInfo>
            )}
            <S.BaseInfo>{checkAdditionalType(additinal_type)}</S.BaseInfo>
          </S.TwoItemsInfoLine>
        )}

        <S.TwoItemsInfoLine>
          {address !== null && address.indexOf("/") === -1 ? (
            <S.BaseInfo>{address}</S.BaseInfo>
          ) : (
            <>
              <S.BaseInfo>
                {address && address.slice(0, address.indexOf("/"))}
              </S.BaseInfo>
              <S.BaseInfo>
                {address && address.slice(address.indexOf("/") + 1)}
              </S.BaseInfo>
            </>
          )}
        </S.TwoItemsInfoLine>
      </S.BaseTextInfoContainer>
    </S.BaseInfoContainer>
  );
};

export default BaseInfoContainer;
