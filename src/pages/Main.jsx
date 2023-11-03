import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import {
  Typography,
  Card,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "../fonts/font.css";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d48963",
    },
    secondary: {
      main: "#f0d5c7",
    },
    third: {
      main: "#BF6436",
    },
  },
});

function Main() {
  useEffect(() => {
    if (!localStorage.getItem("hasLoadedOnce")) {
      localStorage.setItem("hasLoadedOnce", "true");
      window.location.reload();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        id="firstGrid"
        container
        height={window.innerHeight - 50}
        direction="column"
        alignItems="center"
      >
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          height="150px"
        >
          <Typography
            item
            variant="h2"
            id="title"
            fontFamily="Inter"
            color="#180C07"
            fontWeight="600"
            textAlign="center"
          >
            Guess The{" "}
            <span
              style={{
                background: "linear-gradient(0.25turn, #d48963 , #BF6436)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Flag
            </span>
          </Typography>
        </Grid>
        <Grid container item xs direction="column">
          <Grid container item direction="column" xs>
            <Grid container item alignItems="center" justifyContent="center" xs>
              <Button variant="contained" color="secondary">
                <Link to="/Guess" style={{ textDecoration: "none" }}>
                  <Typography
                    item
                    id="button"
                    variant="h4"
                    fontFamily="Inter"
                    color="#180C07"
                    fontWeight="400"
                    textAlign="center"
                  >
                    Categories
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid container item alignItems="center" justifyContent="center" xs>
              <Button variant="contained" color="secondary">
                <Link to="/Training" style={{ textDecoration: "none" }}>
                  <Typography
                    item
                    id="button"
                    variant="h4"
                    fontFamily="Inter"
                    color="#180C07"
                    fontWeight="400"
                    textAlign="center"
                  >
                    Training
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
          <Grid container item direction="column" xs>
            <Grid container item alignItems="center" justifyContent="center" xs>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  localStorage.removeItem("hasLoadedOnce");
                }}
              >
                <Link to="/Guess" style={{ textDecoration: "none" }}>
                  <Typography
                    item
                    id="button"
                    variant="h3"
                    fontFamily="Inter"
                    color="#180C07"
                    fontWeight="600"
                    textAlign="center"
                  >
                    Play !
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid container item alignItems="center" justifyContent="center" xs>
              <Button variant="contained" color="secondary">
                <Link to="/Guess" style={{ textDecoration: "none" }}>
                  <Typography
                    item
                    id="button"
                    variant="h4"
                    fontFamily="Inter"
                    color="#180C07"
                    fontWeight="600"
                    textAlign="center"
                  >
                    Daily Flag
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs>
            <Grid container justifyContent="center" alignItems="center" item xs>
              <Button variant="contained" color="third">
                <Link to="/Guess" style={{ textDecoration: "none" }}>
                  <Typography
                    item
                    id="button"
                    variant="h5"
                    fontFamily="Inter"
                    color="#180C07"
                    fontWeight="600"
                    textAlign="center"
                  >
                    LeaderBoard
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" item xs>
              <Button variant="contained" color="third">
                <Link to="/Guess" style={{ textDecoration: "none" }}>
                  <Typography
                    item
                    id="button"
                    variant="h5"
                    fontFamily="Inter"
                    color="#180C07"
                    fontWeight="600"
                    textAlign="center"
                    fontSize="25px"
                  >
                    Index
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Main;
