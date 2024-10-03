import useGenres from "./useGenres";

const useGenre = (id: number | null) => {
    const genres = useGenres();
    return genres.data?.results.find(x => x.id === id);
}

export default useGenre;