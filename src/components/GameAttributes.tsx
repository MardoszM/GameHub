import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import GameItemCard from "./GameItemCard";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <GameItemCard term="Platforms">
        {game?.parent_platforms?.map((x) => (
          <Text key={x.platform.id}>{x.platform.name}</Text>
        ))}
      </GameItemCard>
      <GameItemCard term="Metascore">
        <CriticScore score={game!.metacritic} />
      </GameItemCard>
      <GameItemCard term="Genres">
        {game?.genres?.map((x) => (
          <Text key={x.id}>{x.name}</Text>
        ))}
      </GameItemCard>
      <GameItemCard term="Publishers">
        {game?.publishers?.map((x) => (
          <Text key={x.id}>{x.name}</Text>
        ))}
      </GameItemCard>
    </SimpleGrid>
  );
};

export default GameAttributes;
