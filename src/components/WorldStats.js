import useSWR from "swr";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

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
              <Paper className={classes.paper} style={{ color: "#00CCCD" }}>
                <Typography variant="h5" component="h5">
                  Active
                </Typography>
                {generalDetails.confirmed.value}
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper} style={{ color: "#45CE30" }}>
                <Typography variant="h5" component="h5">
                  Recovered
                </Typography>
                {generalDetails.recovered.value}
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper} style={{ color: "#FF4848" }}>
                <Typography variant="h5" component="h5">
                  Death
                </Typography>
                {generalDetails.deaths.value}
              </Paper>
            </Grid>
          </Grid>
        </div>
      ) : null}
    </>
  );
};

export default WorldStats;
