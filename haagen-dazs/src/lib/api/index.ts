import { connectionUrl } from "./endpoint";
import axios from "axios";

interface PayloadType {
  admin_id: string;
  password: string;
}

interface TokenType {
  access: string;
  refresh: string;
}

export const getUserToken = async (body: PayloadType) => {
  const response = await axios.post<TokenType>(
    `${connectionUrl}/admin/login`,
    body
  );
  return response.data;
};

export const refreshUserToken = async (payload: { refreshToken: string }) => {
  const response = await axios.patch<{ access: string }>(
    `${connectionUrl}/admin/refresh`,
    {
      headers: {
        refresh: `Bearer ${payload.refreshToken}`
      }
    }
  );

  return response.data;
};

export const cancelSubmitApplicant = async (payload: { email: string }) => {
  const response = await axios.patch(
    `${connectionUrl}/student/${payload.email}/submit`
  );

  return response.data;
};
