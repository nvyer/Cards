import { Grid } from "@mui/material";
import { Footer } from "./components/footer";
import Header from "./components/header";
import Instructions from "./components/instruction";
import Cards from "./components/cards";

function App() {
  return (
    <Grid container width="100vw" height="100vh">
      <Grid item sm={10} xs={10}>
        <Grid container direction="column" height="100vh">
          <Header />
          <Cards />
          <Footer />
        </Grid>
      </Grid>
      <Instructions />
    </Grid>
  );
}

export default App;
