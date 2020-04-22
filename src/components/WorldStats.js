import useSWR from "swr";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";

export const StatCard = styled.div`
  flex: 1;
  border-radius: 20px;
  background: linear-gradient(#20033c 0%, #070000 100%);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.53);
  margin: 10px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const WorldStats = () => {
  const classes = useStyles();
  const { data: generalDetails } = useSWR(
    "https://covid19.mathdro.id/api/",
    (url) => fetch(url).then((_) => _.json())
  );
  useEffect(() => {
    console.log(generalDetails);
  }, [generalDetails]);
  return (
    <>
      {generalDetails !== undefined ? (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
              <StatCard className={classes.paper} style={{ color: "#eada0a" }}>
                <Typography variant="h5" component="h5">
                  Active
                </Typography>
                {generalDetails.confirmed.value}
              </StatCard>
            </Grid>
            <Grid item xs>
              <StatCard className={classes.paper} style={{ color: "#00ef00" }}>
                <Typography variant="h5" component="h5">
                  Recovered
                </Typography>
                {generalDetails.recovered.value}
              </StatCard>
            </Grid>
            <Grid item xs>
              <StatCard className={classes.paper} style={{ color: "#958686" }}>
                <Typography variant="h5" component="h5">
                  Death
                </Typography>
                {generalDetails.deaths.value}
              </StatCard>
            </Grid>
          </Grid>
        </div>
      ) : null}
    </>
  );
};

export default WorldStats;
