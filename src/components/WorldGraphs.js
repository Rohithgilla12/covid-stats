import React from "react";
import GraphTile from "./GraphTile";
import useSWR from "swr";
import { Grid } from "@material-ui/core";

const WorldGraphs = () => {
  const { data: dailyData } = useSWR(
    "https://covid19.mathdro.id/api/daily",
    (url) => fetch(url).then((_) => _.json())
  );
  const confirmCount = (x) => {
    return x.confirmed.total;
  };

  const deathCount = (x) => {
    return x.deaths.total;
  };

  const recoveredCount = (x) => {
    return x.deltaConfirmed;
  };
  return (
    <>
      {dailyData !== undefined ? (
        <>
          <Grid container>
            <GraphTile
              data={dailyData}
              dataKey={confirmCount}
              fill={"#eada0a"}
              title="Total Cases"
            />
          </Grid>
          <Grid container>
            <GraphTile
              data={dailyData}
              dataKey={deathCount}
              fill={"#958686"}
              title="Total Deaths"
            />
          </Grid>
          <Grid container>
            <GraphTile
              data={dailyData}
              dataKey={recoveredCount}
              fill={"#00ef00"}
              title="Delta Confirmed"
            />
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default WorldGraphs;
