import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/nav/NavBar";
import { GameGrid } from "./components/main/GameGrid";
import { GenreList } from "./components/aside/GenreList";

function App() {
  const templateAreas = useBreakpointValue({
    // The `base` key refers to mobile and smaller screen sizes. The grid layout will consist of two rows:
    // - First row: "nav nav" (the "nav" component spans across both columns)
    // - Second row: "main main" (the "main" component spans across both columns)
    base: `"nav nav" "main main"`,

    // The `lg` key refers to large screens (desktop and above). The layout will change to:
    // - First row: "nav nav" (the "nav" component still spans across both columns)
    // - Second row: "aside main" (the "aside" and "main" components will each take up one column)
    lg: `"nav nav" "aside main"`,
  });
  return (
    <Grid templateAreas={templateAreas}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem width={"300px"} area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
