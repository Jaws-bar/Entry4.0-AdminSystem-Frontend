import axios from "axios";

import { ListItem } from "../../pages/AdminPage";

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
    user_email: string;
    apply_time: string;
    additinal_type: string;
    is_daejeon: boolean;
    name: string;
    sex: string;
    birth_date: string;
    parent_name: string;
    parent_tel: string;
    applicant_tel: string;
    address: string;
    post_code: string;
    student_number: string;
    graduated_year: string;
    school_name: string;
    school_tel: string;
    volunteer_time: number;
    full_cut_count: number;
    period_cut_count: number;
    late_count: number;
    early_leave_count: number;
    korean: string;
    social: string;
    history: string;
    math: string;
    science: string;
    tech_and_home: string;
    english: string;
    self_introduction: string;
    study_plan: string;
  };
  score: {
    final_score: string;
  };
}

export interface Creteria {
  region?: "daejeon" | "nation";
  type?: "common" | "meister" | "social";
  status?: 0 | 1;
}

const instanceAxios = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" }
});

const authorizationHeader = (
  accessToken: string
): { Authorization: string } => ({
  Authorization: `Bearer ${accessToken}`
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
  const response = await instanceAxios.delete(`/submit`, {
    headers: authorizationHeader(payload.access),
    params: {
      email: payload.email
    }
  });

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

export const getGradeDistribution = async (payload: {
  access: string;
  region: "daejeon" | "nation";
  type: "common" | "meister" | "social";
}) => {
  const response = await instanceAxios.get("/stats/scores", {
    headers: authorizationHeader(payload.access),
    params: {
      region: payload.region,
      type: payload.type
    }
  });

  return response.data;
};
