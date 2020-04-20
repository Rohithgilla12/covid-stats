import React from "react";
import { Grid } from "@material-ui/core";
import WorldStats from "../components/WorldStats";
import WorldGraphs from "../components/WorldGraphs";

const Home = () => {
  return (
    <Grid container>
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
