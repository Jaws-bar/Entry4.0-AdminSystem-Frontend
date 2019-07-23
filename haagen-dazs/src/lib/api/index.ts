import { connectionUrl } from "./endpoint";
import axios from "axios";

interface payloadType {
  email: string;
  password: string;
}

interface tokenType {
  // accessToken: string;
  access_token: string;
  refreshToken: string;
}

export const getUserToken = async (body: payloadType) => {
  const response = await axios.post<tokenType>(
    `${connectionUrl}/admin/login`,
    body
  );
  return response.data;
};
