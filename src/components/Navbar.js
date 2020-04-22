import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, BrowserRouter as Router } from "react-router-dom";
const Navbar = () => {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: "#260926" }}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Covid Stats
          </Typography>
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Link className={classes.link} to="/about">
            About
          </Link>
        </Toolbar>
      </AppBar>
    </Router>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: 5,
  },
}));

export default Navbar;
