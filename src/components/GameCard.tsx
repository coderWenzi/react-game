import { Card, CardBody, grid, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imgae-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack marginTop={1} marginBottom={2} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />

          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading size="xl" marginBottom={1}>
          {game.name}
        </Heading>

        <Emoji rating_top={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
