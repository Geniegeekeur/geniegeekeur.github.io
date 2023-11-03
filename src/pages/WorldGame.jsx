import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import "../fonts/font.css";
import Button from "@mui/material/Button";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import * as JimpObj from "jimp";
import Stopwatch from "./StopWatch";
import { Link } from "react-router-dom";

const images = require.context("../img/flags/", true);
const imageList = images.keys().map((image) => images(image));

const Jimp = JimpObj.default;

let x = imageList[0];

let nbIndice = 0;
let ArleadyGet = [];
let indexJeu = 207; //Math.floor(Math.random() * 240);
let score = 0;
let badChoice = 4;
let indexJeuArleadyGet = [];
let CountryChoice = [
  "Andorre",
  "Emirats Arabe Unis",
  "Afghanistan",
  "Antigua-et-Barbuda",
  "Anguilla",
  "Albanie",
  "Arménie",
  "Angola",
  "Antarctique",
  "Argentine",
  "Samoa américaines",
  "Autriche",
  "Australie",
  "Aruba",
  "Åland",
  "Azerbaïdjan",
  "Bosnie-Herzégovine",
  "Barbade",
  "Bangladesh",
  "Belgique",
  "Burkina Faso",
  "Bulgarie",
  "Bahreïn",
  "Burundi",
  "Bénin",
  "Bermudes",
  "Brunei",
  "Bolivie",
  "Pays-Bas",
  "Brésil",
  "Bahamas",
  "Bhoutan",
  "Botswana",
  "Biélorussie",
  "Belize",
  "Canada",
  "îles Cocos",
  "République démocratique du Congo",
  "République centrafricaine",
  "République du Congo",
  "Suisse",
  "Côte d'Ivoire",
  "îles Cook",
  "Chili",
  "Cameroun",
  "Chine",
  "Colombie",
  "Costa Rica",
  "Cuba",
  "Cap-Vert",
  "Curaçao",
  "île Christmas",
  "Chypre",
  "Tchéquie",
  "Allemagne",
  "Djibouti",
  "Danemark",
  "Dominique",
  "République dominicaine",
  "Algérie",
  "Équateur",
  "Estonie",
  "Égypte",
  "République arabe sahraouie démocratique",
  "Érythrée",
  "Espagne",
  "Éthiopie",
  "Europe",
  "Finlande",
  "Fidji",
  "îles Malouines",
  "États fédérés de Micronésie",
  "îles Féroé",
  "France",
  "Gabon",
  "Royaume-Uni",
  "Angleterre",
  "Écosse",
  "Pays de Galles",
  "Grenade",
  "Géorgie",
  "Guernesey",
  "Ghana",
  "Gibraltar",
  "Groenland",
  "Gambie",
  "Guinée",
  "Guinée équatoriale",
  "Grèce",
  "Géorgie du Sud-et-les Îles Sandwich du Sud",
  "Guatemala",
  "Guam",
  "Guinée-Bissau",
  "Guyana",
  "Hong Kong",
  "Honduras",
  "Croatie",
  "Haïti",
  "Hongrie",
  "Indonésie",
  "Irlande",
  "Israël",
  "île de Man",
  "Inde",
  "Territoire britannique de l'océan Indien",
  "Irak",
  "Iran",
  "Islande",
  "Italie",
  "Jersey",
  "Jamaïque",
  "Jordanie",
  "Japon",
  "Kenya",
  "Kirghizistan",
  "Cambodge",
  "Kiribati",
  "Comores",
  "Saint-Christophe-et-Niévès",
  "Corée du Nord",
  "Corée du Sud",
  "Koweït",
  "îles Caïmans",
  "Kazakhstan",
  "Laos",
  "Liban",
  "Sainte-Lucie",
  "Liechtenstein",
  "Sri Lanka",
  "Liberia",
  "Lesotho",
  "Lituanie",
  "Luxembourg",
  "Lettonie",
  "Libye",
  "Maroc",
  "Monaco",
  "Moldavie",
  "Monténégro",
  "Madagascar",
  "Îles Marshall",
  "Macédoine du Nord",
  "Mali",
  "Birmanie",
  "Mongolie",
  "Macao",
  "Îles Mariannes du Nord",
  "Mauritanie",
  "Montserrat",
  "Malte",
  "Maurice",
  "Maldives",
  "Malawi",
  "Mexique",
  "Malaisie",
  "Mozambique",
  "Namibie",
  "Niger",
  "île Norfolk",
  "Nigeria",
  "Nicaragua",
  "Pays-Bas",
  "Norvège",
  "Népal",
  "Nauru",
  "Niue",
  "Nouvelle-Zélande",
  "Oman",
  "Panama",
  "Pérou",
  "Polynésie française",
  "Papouasie-Nouvelle-Guinée",
  "Philippines",
  "Pakistan",
  "Pologne",
  "îles Pitcairn",
  "Porto Rico",
  "Palestine",
  "Portugal",
  "Palaos",
  "Paraguay",
  "Qatar",
  "Roumanie",
  "Serbie",
  "Russie",
  "Rwanda",
  "Arabie saoudite",
  "Îles Salomon",
  "Seychelles",
  "Soudan",
  "Suède",
  "Singapour",
  "Slovénie",
  "Slovaquie",
  "Sierra Leone",
  "Saint-Marin",
  "Sénégal",
  "Somalie",
  "Suriname",
  "Soudan du Sud",
  "Sao Tomé-et-Principe",
  "Salvador",
  "Saint-Martin",
  "Syrie",
  "Eswatini",
  "Îles Turques-et-Caïques",
  "Tchad",
  "Terres australes et antarctiques françaises",
  "Togo",
  "Thaïlande",
  "Tadjikistan",
  "Tokelau",
  "Timor oriental",
  "Turkménistan",
  "Tunisie",
  "Tonga",
  "Turquie",
  "Trinité-et-Tobago",
  "Tuvalu",
  "république de Chine",
  "Tanzanie",
  "Ukraine",
  "Ouganda",
  "États-Unis",
  "Uruguay",
  "Ouzbékistan",
  "Vatican",
  "Saint-Vincent-et-les-Grenadines",
  "Venezuela",
  "îles Vierges britanniques",
  "Îles Vierges des États-Unis",
  "Viêt Nam",
  "Vanuatu",
  "Wallis-et-Futuna",
  "Samoa",
  "Kosovo",
  "Yémen",
  "Afrique du Sud",
  "Zambie",
  "Zimbabwe",
];
indexJeuArleadyGet.push(indexJeu);
let debut = 5;
let fin = 5;

let end = false;

let heartBase = [];
for (let i = 0; i < 5; i++) {
  heartBase[i] = (
    <svg
      id="icon"
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path d="M19.5 13.576a4.976 4.976 0 0 0 1.495-3.704A5 5 0 0 0 12 7.01a5 5 0 1 0-7.5 6.566l7.5 7.428 7.5-7.428Z"></path>{" "}
    </svg>
  );
}

let heart = [];
for (let i = 0; i < 5; i++) {
  heart[i] =
    "<svg id='icon' width='46' height='46' fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='3' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M19.5 13.576a4.976 4.976 0 0 0 1.495-3.704A5 5 0 0 0 12 7.01a5 5 0 1 0-7.5 6.566l7.5 7.428 7.5-7.428Z'></path> </svg>";
}

function WorldGame() {
  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (!localStorage.getItem("hasLoadedOnce")) {
      localStorage.setItem("hasLoadedOnce", "true");
      window.location.reload();
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCountryTextSize();
    sizeOfImage();
  }, []);

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
      <h1>{message}</h1>
      <Dialog open={open}>
        <DialogTitle>Vous avez perdu !</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Le drapeau correspondant au {CountryChoice[indexJeu]} était :{" "}
            <img src={imageList[indexJeu]} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button onClick={handleClose} autoFocus>
              Fermer
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "${window.innerWidth}",
        }}
      >
        <Typography
          item
          id="title"
          variant="h2"
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
      <Grid container justifyContent="space-around" alignItems="center">
        <Stopwatch item run={true} />
      </Grid>
      <Grid
        container
        item
        id="PaysName"
        sx={{
          width: "${window.innerWidth}",
          position: "-webkit - sticky",
          position: "sticky",
          top: "0",
          zIndex: "10",
          backgroundColor: "#FCF6F3",
        }}
      >
        <Grid container item xs alignItems="center" justifyContent="center">
          <Typography
            item
            id="text"
            fontWeight="400"
            fontFamily="Inter"
            variant="h3"
            textAlign="center"
          >
            <span id="score">{score}</span>
            <svg
              id="icon"
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5v16"></path>
              <path d="M19 5v9"></path>
              <path d="M5 5a5 5 0 0 1 7 0 5 5 0 0 0 7 0"></path>
              <path d="M5 14a5 5 0 0 1 7 0 5 5 0 0 0 7 0"></path>
            </svg>
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs
          height="100px"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            item
            fontWeight="600"
            fontFamily="Inter"
            id="text countryChoice"
            className="countryChoice"
            textAlign="center"
            color="#BF6436"
          >
            <span id="Pays">{CountryChoice[indexJeu]}</span>
          </Typography>
        </Grid>
        <Grid container item alignItems="center" justifyContent="center">
          <Typography
            item
            fontWeight="400"
            fontFamily="Inter"
            id="text"
            variant="h3"
            textAlign="center"
          >
            <Grid container>
              {heartBase.map(function (object, id) {
                return (
                  <Box item id={id}>
                    {object}
                  </Box>
                );
              })}
            </Grid>
          </Typography>
        </Grid>
      </Grid>
      <Card>
        <Grid container item justifyContent="center">
          {imageList.map((image, index) => {
            return !ArleadyGet.includes(image) ? (
              <Button
                item
                variant="text"
                id={index + 5}
                onMouseOver={() => OnOver(index + 5)}
                onMouseLeave={() => OnLeave(index + 5)}
                onClick={() => {
                  NextLevel(image, index + 5);
                  if (end === true) {
                    handleClickOpen();
                  }
                }}
              >
                <Grid
                  container
                  backgroundColor="yellow"
                  item
                  className="image"
                  width="auto"
                  height="auto"
                >
                  <img id={index + 5} src={image} alt={`image-${index + 5}`} />
                  <span id={image}></span>
                </Grid>
              </Button>
            ) : (
              {}
            );
          })}
        </Grid>
      </Card>
      <Button
        item
        variant="contained"
        onClick={() => {
          GiveHint(indexJeu + 5);
        }}
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "30px",
          zIndex: "99",
          borderRadius: "10p",
        }}
      >
        <svg
          width="46"
          height="46"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 16a5 5 0 1 1 6 0 3.5 3.5 0 0 0-1 3 2 2 0 0 1-4 0 3.499 3.499 0 0 0-1-3"></path>
          <path d="M9.7 17h4.6"></path>
        </svg>
      </Button>
    </Grid>
  );
}

export default WorldGame;

async function getPixelColor() {
  const image = await Jimp.read("../img/flags/fr.png");

  console.log(Jimp.intToRGBA(image.getPixelColor(0, 0)));
}

getPixelColor();

axios.get("http://localhost:5000/api/date").then(function (response) {
  let prec_date = response.data.result[0]["date"];
  var date = new Date();
  var UTCdate = new Date(date.toUTCString());

  if (prec_date != UTCdate.getDate()) {
    console.log(prec_date);
    axios.delete("http://localhost:5000/api/date/" + prec_date);
    axios.post("http://localhost:5000/api/date", {
      date: UTCdate.getDate(),
      indexJeu: Math.floor(Math.random() * 240),
    });
  }
});

const date1 = new Date("August 19, 1975 21:10:00");
const date2 = new Date("August 19, 1975 15:10:00");

console.log(date2.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// Expected output: true

function setCountryTextSize() {
  if (document.getElementById("Pays").textContent.length >= 20) {
    if (window.innerWidth >= 426) {
      document.getElementById("Pays").style.fontSize = "30px";
    } else {
      document.getElementById("Pays").style.fontSize = "15px";
    }
  } else {
    if (window.innerWidth >= 426) {
      document.getElementById("Pays").style.fontSize = "50px";
    } else {
      document.getElementById("Pays").style.fontSize = "30px";
    }
  }
}

function sizeOfImage() {
  if (window.innerWidth < 426) {
    for (let i = 0; i < CountryChoice.length; i++) {
      let width = document.getElementById(i + 5).offsetWidth;
      let height = document.getElementById(i + 5).offsetHeight;
      console.log(width);
      console.log(height);
      document.getElementById(i + 5).style.width = width / 1.5 + "px";
      document.getElementById(i + 5).style.height = height / 1.5 + "px";
    }
  }
}

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.getElementById(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

async function NextLevel(name, index) {
  if (end === false) {
    if (index - 5 === indexJeu) {
      for (let i = debut; i < fin; i++) {
        document.getElementById(i).style.backgroundColor = "";
      }
      nbIndice = 0;
      score = score + 1;
      document.querySelector("#score").textContent = score;

      await animateCSS(index, "zoomOut");

      ArleadyGet.push(name);
      document.getElementById(index).style.display = "none";
      document.getElementById(index).style.visibility = "hidden";

      indexJeuArleadyGet.push(indexJeu);
      while (indexJeuArleadyGet.includes(indexJeu)) {
        indexJeu = Math.floor(Math.random() * 240);
      }
    } else {
      heart[badChoice] =
        "<svg id='icon' width='46' height='46' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M19.5 13.576 12 21.004l-7.5-7.428A5 5 0 1 1 12 7.01a5 5 0 1 1 7.5 6.572'></path> <path d='m12 7-2 4 4 3-2 4v3'></path> </svg>";
      heart.map(function (object, id) {
        document.getElementById(id).innerHTML = object;
      });
      animateCSS(index, "headShake");
      animateCSS(badChoice, "heartBeat");
      badChoice = badChoice - 1;
      if (badChoice === -1) {
        heart[badChoice + 1] =
          "<svg id='icon' width='46' height='46' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M19.5 13.576 12 21.004l-7.5-7.428A5 5 0 1 1 12 7.01a5 5 0 1 1 7.5 6.572'></path> <path d='m12 7-2 4 4 3-2 4v3'></path> </svg>";
        heart.map(function (object, id) {
          document.getElementById(id).innerHTML = object;
        });
        animateCSS(badChoice + 1, "heartBeat");
        EndGame(indexJeu);
        //window.location.reload();
      }
    }
  }
  document.querySelector("#Pays").textContent = CountryChoice[indexJeu];
  setCountryTextSize();
}

function OnOver(index) {
  document.getElementById(index).style.transform = "scale(1.2)";
}

function OnLeave(index) {
  document.getElementById(index).style.transform = "scale(1)";
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function GiveHint(index) {
  for (let i = debut; i < fin; i++) {
    document.getElementById(i).style.backgroundColor = "";
  }
  if (nbIndice === 0) {
    if (index < 15) {
      debut = randomIntFromInterval(5, index);
      fin = debut + 10;
    } else if (index >= 235) {
      fin = randomIntFromInterval(index + 1, 245);
      debut = fin - 10;
    } else {
      debut = randomIntFromInterval(index - 9, index);
      fin = debut + 10;
    }
    nbIndice = nbIndice + 1;
    for (let i = debut; i < fin; i++) {
      document.getElementById(i).style.backgroundColor = "#f69767";
    }
  } else if (nbIndice === 1) {
    if (index < 10) {
      debut = randomIntFromInterval(5, index);
      fin = debut + 5;
    } else if (index >= 240) {
      fin = randomIntFromInterval(index + 1, 245);
      debut = fin - 5;
    } else {
      debut = randomIntFromInterval(index - 4, index);
      fin = debut + 5;
    }
    nbIndice = nbIndice + 1;
    for (let i = debut; i < fin; i++) {
      document.getElementById(i).style.backgroundColor = "#b95d2e";
    }
  } else if (nbIndice === 2) {
    if (index < 8) {
      debut = randomIntFromInterval(5, index);
      fin = debut + 3;
    } else if (index >= 241) {
      fin = randomIntFromInterval(index + 1, 245);
      debut = fin - 3;
    } else {
      debut = randomIntFromInterval(index - 2, index);
      fin = debut + 3;
    }
    for (let i = debut; i < fin; i++) {
      document.getElementById(i).style.backgroundColor = "#653b26";
    }
  }
  document.getElementById(debut).scrollIntoView({ block: "center" });
}

function EndGame(index) {
  var buttons = document.getElementsByTagName("Button");
  for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].disabled = true;
  }
  end = true;
  var textClock = document.getElementsByClassName("stopwatch")[0].textContent;
  document.getElementsByClassName("stopwatch")[0].textContent = textClock;
}
