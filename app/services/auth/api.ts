// services/api.ts
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import toast from "react-hot-toast";
import { getErrorMessageByCode } from "../../constants/errorCodes";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`;
    // const token = localStorage.getItem("authToken");
    // if (token) {
    //   if (!config.headers) {
    //     config.headers = {} as AxiosRequestHeaders;
    //   }
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Check if response status is 200 but data status is 0 (error case)
    if (response.data && response.data.status === 0) {
      const errorCode = response.data.error;

      if (errorCode && typeof errorCode === "number") {
        const errorMessage = getErrorMessageByCode(errorCode);
        toast.error(errorMessage);
      } else {
        toast.error(response.data.type || "An error occurred");
      }
    }

    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default api;
