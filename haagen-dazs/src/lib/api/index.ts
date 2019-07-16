import { connectionUrl } from "./endpoint";
import axios from "axios";

interface payloadType {
  email: string;
  password: string;
}

interface tokenType {
  accessToken: string;
  refreshToken: string;
}

export function getUserToken(body: payloadType) {
  return axios.post<tokenType>(`${connectionUrl}/admin/login`, body);
}
