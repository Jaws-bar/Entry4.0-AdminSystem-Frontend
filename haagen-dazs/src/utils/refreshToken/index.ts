import { refreshUserToken } from "../../lib/api";

export const refreshAccessToken = () => {
  try {
    const response = refreshUserToken({
      refresh: localStorage.getItem("refresh")
    });

    console.log(response);
  } catch (error) {}
};
