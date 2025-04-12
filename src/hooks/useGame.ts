import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

const apiclient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiclient.get(slug),
  });
};

export default useGame;
