import axios, { AxiosRequestConfig } from "axios";

export interface FetchRespose<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "40ac030f379f4edfa5463b7409484105",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRespose<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}

export default APIClient;
