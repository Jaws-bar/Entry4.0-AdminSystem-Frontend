import axios from "axios";

import { ListItem } from "../../pages/AdminPage";
import { ScoreCategory } from "../../components/CompetitonView/table";

interface PayloadType {
  id: string;
  password: string;
}

export interface NumberOfApplicantsDetailItems {
  meister: number;
  social: number;
  common: number;
}

export interface NumberOfApplicantsSortation {
  daejeon: NumberOfApplicantsDetailItems;
  nation: NumberOfApplicantsDetailItems;
  total: {
    daejeon: number;
    nation: number;
  };
}

export interface CompetitonDetatilItems {
  meister: string;
  social: string;
  common: string;
}

export interface CompetitonSortation {
  daejeon: CompetitonDetatilItems;
  nation: CompetitonDetatilItems;
  total: {
    daejeon: string;
    nation: string;
    all: string;
  };
}

export interface SubmittedApplication {
  application: {
    additional_type:
      | "NATIONAL_MERIT"
      | "PRIVILEGED_ADMISSION"
      | "NOT_APPLICABLE";
    address: string;
    applicant_tel: string;
    apply_type:
      | "COMMON"
      | "MEISTER"
      | "SOCIAL_ONE_PARENT"
      | "SOCIAL_FROM_NORTH"
      | "SOCIAL_MULTICULTURAL"
      | "SOCIAL_BASE_LIVING"
      | "SOCIAL_LOWEST_INCOME"
      | "SOCIAL_TEEN_HOUSEHOLDER";
    birth_date: string;
    early_leave_count: number;
    full_cut_count: number;
    ged_average_score: string;
    is_daejeon: boolean;
    late_count: number;
    name: string;
    parent_name: string;
    parent_tel: string;
    period_cut_count: number;
    self_introduction: string;
    sex: string;
    school_name: string;
    school_tel: string;
    study_plan: string;
    user_email: string;
    volunteer_time: number;
  };
  score: string;
}

export interface Creteria {
  region?: "daejeon" | "nation";
  type?: "common" | "meister" | "social";
  status?: string;
}

const instanceAxios = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" }
});

const authorizationHeader = (
  accessToken: string
): { Authorization: string } => ({
  Authorization: accessToken
});

export const getUserToken = async (body: PayloadType) => {
  const response = await instanceAxios.post<{
    access: string;
    refresh: string;
  }>("/auth/login", body);
  return response.data;
};

export const refreshUserToken = async (payload: { refresh: string }) => {
  const response = await instanceAxios.patch<{ access: string }>(
    "/auth/refresh",
    null,
    {
      headers: {
        "X-Refresh-Token": payload.refresh
      }
    }
  );

  return response.data;
};

export const getNumberOfApplicantsByRegion = async (payload: {
  region: "daejeon" | "nation";
  access: string;
}) => {
  const response = await instanceAxios.get<{ applicants: number }>(
    "/stats/applicants",
    {
      headers: authorizationHeader(payload.access),
      params: {
        region: payload.region
      }
    }
  );

  return response.data;
};

export const getAllApplicantsStatisticsTable = async (payload: {
  access: string;
}) => {
  const response = await instanceAxios.get<NumberOfApplicantsSortation>(
    "/stats/all",
    {
      headers: authorizationHeader(payload.access)
    }
  );

  return response.data;
};

export const getCompetitionRate = async (payload: { access: string }) => {
  const response = await instanceAxios.get<CompetitonSortation>(
    "/stats/competition",
    {
      headers: authorizationHeader(payload.access)
    }
  );

  return response.data;
};

export const getApplicantsList = async (payload: {
  access: string;
  body: Creteria;
}) => {
  const response = await instanceAxios.get<ListItem[]>("/list/applicants", {
    headers: authorizationHeader(payload.access),
    params: {
      region: payload.body.region,
      type: payload.body.type,
      status: payload.body.status
    }
  });

  return response.data;
};

export const getApplication = async (payload: {
  email: string;
  access: string;
}) => {
  const response = await instanceAxios.get<SubmittedApplication>(
    "/info/application",
    {
      headers: authorizationHeader(payload.access),
      params: {
        email: payload.email
      }
    }
  );

  return response.data;
};

export const cancelSubmitApplicant = async (payload: {
  email: string;
  access: string;
}) => {
  const response = await instanceAxios.patch(
    `/submit`,
    {},
    {
      headers: authorizationHeader(payload.access),
      params: {
        email: payload.email
      }
    }
  );

  return response.data;
};

export const changePaidArrivedStatus = async (payload: {
  access: string;
  email: string;
  status: "0" | "1";
}) => {
  const response = await instanceAxios.patch(
    "/info/status",
    {},
    {
      headers: authorizationHeader(payload.access),
      params: {
        email: payload.email,
        status: payload.status
      }
    }
  );

  return response.data;
};

export const getScoreDistribution = async (payload: {
  access: string;
  region: "daejeon" | "nation";
  type: "common" | "meister" | "social";
}) => {
  const response = await instanceAxios.get<ScoreCategory>("/stats/scores", {
    headers: authorizationHeader(payload.access),
    params: {
      region: payload.region,
      type: payload.type
    }
  });

  return response.data;
};

export const getApplicantIdPhotoApi = async (payload: {
  email: string;
  access: string;
}) => {
  const response = await instanceAxios.get<Blob>("/info/photo", {
    headers: {
      Accept: "image/*",
      Authorization: authorizationHeader(payload.access).Authorization
    },
    params: {
      email: payload.email
    },
    responseType: "blob"
  });

  return response.data;
};

export const printListExcel = async () => {
  const response = await instanceAxios.get<File>("/list/excel", {
    // headers: {
    responseType: "blob"
    // }
  });

  return response.data;
};
