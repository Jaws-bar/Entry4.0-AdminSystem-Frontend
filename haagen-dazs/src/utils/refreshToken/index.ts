import { refreshUserToken } from "../../lib/api";

export const refreshAccessToken = async () => {
  if (localStorage.getItem("refresh")) {
    try {
      const response = await refreshUserToken({
        refresh: localStorage.getItem("refresh")
      });

      sessionStorage.setItem("access", response.access);
    } catch (error) {
      console.log(error);
    }
  }
};
