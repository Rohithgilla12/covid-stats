import React from "react";
import { Grid, Typography } from "@material-ui/core";
import WorldStats from "../components/WorldStats";
import WorldGraphs from "../components/WorldGraphs";

const Home = () => {
  return (
    <Grid container>
      {/* <Typography variant="h1" component="h2">
        Home
      </Typography> */}
      <Grid container>
        <WorldStats />
      </Grid>
      <Grid container>
        <WorldGraphs />
      </Grid>
    </Grid>
  );
};

export default Home;
