import { Heading, List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";
import GenreCard from "./GenreCard";
import GenreCardSkeleton from "./GenreCardSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);
  const selectedGenreId = useGameQueryStore((x) => x.gameQuery.genreId);
  const setGenreId = useGameQueryStore((x) => x.setGenreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((x) => (
            <GenreCardSkeleton key={x} id={`genre_skeleton-${x}`} />
          ))}
        {data?.results.map((x) => (
          <GenreCard
            key={x.id}
            onSelectGenre={setGenreId}
            selectedGenreId={selectedGenreId ?? null}
          >
            {x}
          </GenreCard>
        ))}
      </List>
    </>
  );
};

export default GenreList;
