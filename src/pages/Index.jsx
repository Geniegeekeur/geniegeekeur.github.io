import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "../fonts/font.css";
import Button from "@mui/material/Button";

const images = require.context("../img/flags/", true);
const imageList = images.keys().map((image) => images(image));

let ArleadyGet = [];

function Index() {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        justifyContent: "center",
        width: "${window.innerWidth}",
        height: "${window.innerHeight}",
      }}
    >
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "${window.innerWidth}",
          height: "150px",
        }}
      >
        <Typography
          item
          variant="h2"
          fontFamily="Inter"
          color="#180C07"
          fontWeight="600"
          textAlign="center"
        >
          Guess The <span style={{ color: "#BF6436" }}>Flag</span>
        </Typography>
      </Grid>
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "${window.innerWidth}",
          height: "150px",
          paddingBottom: "30px",
        }}
      >
        <Typography item fontWeight="400" fontFamily="Inter" variant="h3">
          France
        </Typography>
      </Grid>
      <Grid container item justifyContent="center">
        {imageList.map((image, index) => {
          return !ArleadyGet.includes(image) ? (
            <Button
              item
              variant="text"
              id={image}
              onClick={() => {
                NextLevel(image);
              }}
            >
              <img id={index} src={image} alt={`image-${index}`} />
            </Button>
          ) : (
            console.log("hello")
          );
        })}
      </Grid>
    </Grid>
  );
}

function NextLevel(name) {
  ArleadyGet.push(name);
  document.getElementById(name).style.display = "none";
  document.getElementById(name).style.visibility = "hidden";
  console.log(ArleadyGet);
}

export default Index;
