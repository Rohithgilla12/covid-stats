import React from "react";
import {
  Area,
  AreaChart,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import styled from "styled-components";

const ToolTipWrapper = styled.div`
  color: black;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
`;
const formatYAxis = (tickItem) => {
  return `${tickItem / 1000}K`;
};
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
const CustomTooltip = ({ active, payload, label }) => {
  console.log(label, payload);
  if (active) {
    return (
      <ToolTipWrapper className={"custom-tooltip"}>
        <p className="label">{`Date : ${label}`}</p>
        <p className={"desc"}> {payload[0].value}</p>
      </ToolTipWrapper>
    );
  }

  return null;
};

const GraphTile = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item style={{ width: "98vw" }}>
          <Paper>
            {props.title}
            <ResponsiveContainer height={300}>
              <AreaChart data={props.data}>
                <XAxis
                  dataKey={"reportDate"}
                  value="Date"
                  stroke="white"
                  interval={10}
                  tickSize={1}
                  ticks={false}
                  tickFormatter={(tick) => tick.replace("2020-", "")}
                />
                <Label value="Date" offset={0} position="insideBottom" />
                <YAxis
                  stroke="white"
                  tickFormatter={formatYAxis}
                  tickSize={1}
                />
                <Area
                  type="monotone"
                  dataKey={props.dataKey}
                  fillOpacity={1}
                  fill={props.fill}
                />
                />
                <Tooltip content={CustomTooltip} />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default GraphTile;
