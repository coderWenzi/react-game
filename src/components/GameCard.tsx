import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imgae-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

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
          <Link to={`games/${game.slug}`}>{game.name}</Link>
        </Heading>

        <Emoji rating_top={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
