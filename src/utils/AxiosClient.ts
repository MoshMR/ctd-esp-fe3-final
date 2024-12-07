import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../constants/api";

export const API_CLIENT = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export const getRequest = async <T>(url: string, options?: Record<string, unknown>): Promise<T> => {
  const response: AxiosResponse<T> = await API_CLIENT.get(url, options);
  return response.data;
};
