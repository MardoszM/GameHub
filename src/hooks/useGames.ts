import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";
import APIClient, { Response } from "../services/api-client";
import { GameQuery } from "../store";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<Response<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: ({pageParam = 1}) => apiClient.getAll({params: {
    genres: gameQuery.genreId, 
    parent_platforms: gameQuery.platformId,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
    page: pageParam
    }}),
  getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
  staleTime: ms("24h")
})

export default useGames;