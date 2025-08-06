// services/api.ts
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import toast from "react-hot-toast";

const api: AxiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_AUTH_API_URL,
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
    if (response.data["status"] == 0) toast.error(response.data["type"]);

    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default api;
