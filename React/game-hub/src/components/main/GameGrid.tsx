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
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skel) => (
            <GameCardContainer>
              <GameCardSceleton key={skel} />
            </GameCardContainer>
          ))}
        {data.map((game: Game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
