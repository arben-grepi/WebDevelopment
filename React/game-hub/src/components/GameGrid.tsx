import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/usegames";
import { GameCard } from "./GameCard";
import { GameCardSceleton } from "./GameCardSceleton";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading && skeletons.map((skel) => <GameCardSceleton key={skel} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
