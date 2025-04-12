import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} padding={5} as="dl">
      <DefinitionItem title="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem title="Metacritic">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem title="Genres">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem title="publishers">
        {game?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
