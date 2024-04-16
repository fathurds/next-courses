import { AxiosError, AxiosRequestConfig } from "axios";
import axiosInstance from ".";

interface ArgProps {
  baseUrl?: string;
}

const axiosBaseQuery: any =
  (args: ArgProps) =>
  async ({ url, method, data, params, headers }: AxiosRequestConfig) => {
    try {
      const baseUrl = args?.baseUrl ?? "";
      const response = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: response.data };
    } catch (error: any) {
      let err: AxiosError<any> = error;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export default axiosBaseQuery;
