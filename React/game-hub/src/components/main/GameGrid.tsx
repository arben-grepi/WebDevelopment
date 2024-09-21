import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../../hooks/useGames";
import { GameCard } from "./Card/GameCard";
import { GameCardSceleton } from "./Card/GameCardSceleton";
import GameCardContainer from "./Card/GameCardContainer";

export const GameGrid = () => {
  const { games: data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading && skeletons.map((skel) => <GameCardSceleton key={skel} />)}
        {data.map((game: Game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
