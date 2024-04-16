import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;