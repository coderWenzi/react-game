import { useEffect, useState } from "react";
import apiClient from "../services/client-api";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchGenresRespose<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dep?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);

      apiClient
        .get<FetchGenresRespose<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then(({ data }) => {
          setData(data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    dep ? dep : []
  );

  return { data, error, isLoading };
};

export default useData;
