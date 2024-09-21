import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/nav/NavBar";
import { GameGrid } from "./components/main/GameGrid";
import { GenreList } from "./components/aside/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

function App() {
  const [selecteGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} width={"300px"} area={"aside"}>
          <GenreList
            selectedGenre={selecteGenre}
            onSelectGenre={(g) => setSelectedGenre(g)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selecteGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
