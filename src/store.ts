import { create } from "zustand";

export interface GameQuery {
    genreId?: number | null;
    platformId?: number | null;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setSortOrder: (sortOrder: string) => void;
    setPlatformId: (platformId: number | null) => void;
    setGenreId: (genreId: number) => void;
}


const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText: string) => set(() => ({gameQuery: {searchText: searchText}})),
    setSortOrder: (sortOrder: string) => set(store => ({gameQuery: {...store.gameQuery, sortOrder: sortOrder}})),
    setPlatformId: (platformId: number | null) => set(store => ({gameQuery: {...store.gameQuery, platformId: platformId}})),
    setGenreId: (genreId: number | null) => set(store => ({gameQuery: {...store.gameQuery, genreId: genreId}})),
}));

export default useGameQueryStore;