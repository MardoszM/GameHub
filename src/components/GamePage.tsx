import {
  GridItem,
  Heading,
  SimpleGrid,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import GameScreenshots from "./GameScreenshots";
import GameTrailer from "./GameTrailer";

const GamePage = () => {
  const { slug } = useParams();
  const { data: selectedGame, isLoading, error } = useGame(slug!);
  if (error) throw error;
  if (!selectedGame) return <Text>No game found.</Text>;

  return isLoading ? (
    <SkeletonText />
  ) : (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{selectedGame.name}</Heading>
        <ExpandableText>{selectedGame.description_raw}</ExpandableText>
        <GameAttributes game={selectedGame} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={selectedGame.id} />
        <GameScreenshots gameId={selectedGame.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GamePage;
