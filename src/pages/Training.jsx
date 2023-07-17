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

const images = require.context("../img/flags/", true);
const imageList = images.keys().map((image) => images(image));

let nbIndice = 0;
let ArleadyGet = [];
let indexJeu = Math.floor(Math.random() * 240);
let score = 0;
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
  "république du Congo",
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

function Training() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Grid
        container
        item
        alignItems="center"
        justifyContent="space-between"
        id="PaysName"
        sx={{
          width: "${window.innerWidth}",
          height: "auto",
          position: "-webkit - sticky",
          position: "sticky",
          top: "0",
          zIndex: "10",
          backgroundColor: "#FCF6F3",
        }}
      >
        <Button
          item
          variant="contained"
          onClick={() => {
            GiveHint(indexJeu + 5);
          }}
        >
          Indice
        </Button>
        <Grid container item xs={3} alignItems="center" justifyContent="center">
          <Typography
            item
            fontWeight="400"
            fontFamily="Inter"
            variant="h3"
            textAlign="center"
          >
            <span id="score">{score}</span>
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
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
          xs={6}
          height="100px"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            item
            fontWeight="400"
            fontFamily="Inter"
            variant="h3"
            textAlign="center"
            color="#BF6436"
          >
            <span id="Pays">{CountryChoice[indexJeu]}</span>
          </Typography>
        </Grid>
        <Grid container item xs={3} alignItems="center" justifyContent="center">
          <Typography
            item
            fontWeight="400"
            fontFamily="Inter"
            variant="h3"
            textAlign="center"
          ></Typography>
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
                }}
              >
                <Grid container direction="column">
                  <img id={index + 5} src={image} alt={`image-${index + 5}`} />
                  <span id={image}></span>
                </Grid>
              </Button>
            ) : (
              console.log("hello")
            );
          })}
        </Grid>
      </Card>
    </Grid>
  );
}

export default Training;

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

function NextLevel(name, index) {
  if (index - 5 === indexJeu) {
    for (let i = debut; i < fin; i++) {
      document.getElementById(i).style.backgroundColor = "";
    }
    nbIndice = 0;
    score = score + 1;
    document.querySelector("#score").textContent = score;

    ArleadyGet.push(name);

    document.getElementById(name).textContent = CountryChoice[index - 5];
    document.getElementById(index).style.filter = "grayscale(80%)";

    indexJeuArleadyGet.push(indexJeu);
    while (indexJeuArleadyGet.includes(indexJeu)) {
      indexJeu = Math.floor(Math.random() * 240);
    }
  }
  document.querySelector("#Pays").textContent = CountryChoice[indexJeu];
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
  console.log(index);
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
      console.log("YESS");
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
  console.log(debut);
  console.log(fin);
  document.getElementById(debut).scrollIntoView({ block: "center" });
}
