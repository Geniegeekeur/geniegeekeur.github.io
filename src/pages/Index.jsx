import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "../fonts/font.css";
import Button from "@mui/material/Button";
import "animate.css";
import { useState, useEffect } from "react";
import Stopwatch from "./StopWatch";

const images = require.context("../img/flags/", true);
const imageList = images.keys().map((image) => images(image));

let ArleadyGet = [];
let indexJeu = Math.floor(Math.random() * 243);
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
  "Norvège",
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
  "Australie",
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
  "Norvège",
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

let heartBase = [];
for (let i = 0; i < 5; i++) {
  heartBase[i] = (
    <svg
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
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
  heart[0] =
    "<svg width='46' height='46' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M19.5 13.576a4.976 4.976 0 0 0 1.495-3.704A5 5 0 0 0 12 7.01a5 5 0 1 0-7.5 6.566l7.5 7.428 7.5-7.428Z'></path> </svg>";
}

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
      <Grid>
        <Stopwatch />
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
        <Grid container item xs={3} alignItems="center" justifyContent="center">
          <Typography
            item
            fontWeight="400"
            fontFamily="Inter"
            variant="h3"
            textAlign="center"
          >
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
            <span id="score">{score}</span>
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
      <Grid container item justifyContent="center">
        {imageList.map((image, index) => {
          return !ArleadyGet.includes(image) ? (
            <Button
              item
              variant="text"
              id={index}
              onClick={() => {
                NextLevel(image, index);
              }}
            >
              <Grid container direction="column">
                <img id={index} src={image} alt={`image-${index}`} />
                <span id={image}></span>
              </Grid>
            </Button>
          ) : (
            console.log("hello")
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Index;

console.log(window.innerWidth);
console.log(46 * (window.innerWidth / 46));

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
  if (badChoice === 0) {
    heart[badChoice] =
      "<svg width='46' height='46' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M19.5 13.576 12 21.004l-7.5-7.428A5 5 0 1 1 12 7.01a5 5 0 1 1 7.5 6.572'></path> <path d='m12 7-2 4 4 3-2 4v3'></path> </svg>";
    heart.map(function (object, id) {
      document.getElementById(id).innerHTML = object;
    });
    animateCSS(badChoice, "heartBeat");
    window.location.reload();
  } else {
    if (index === indexJeu) {
      score = score + 1;
      document.querySelector("#score").textContent = score;

      ArleadyGet.push(name);
      // document.getElementById(index).style.display = "none";
      // document.getElementById(index).style.visibility = "hidden";

      document.getElementById(name).textContent = CountryChoice[index];
      document.getElementById(index).style.filter = "grayscale(80%)";

      indexJeuArleadyGet.push(indexJeu);
      while (indexJeuArleadyGet.includes(indexJeu)) {
        indexJeu = Math.floor(Math.random() * 243);
      }
    } else {
      heart[badChoice] =
        "<svg width='46' height='46' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M19.5 13.576 12 21.004l-7.5-7.428A5 5 0 1 1 12 7.01a5 5 0 1 1 7.5 6.572'></path> <path d='m12 7-2 4 4 3-2 4v3'></path> </svg>";
      heart.map(function (object, id) {
        document.getElementById(id).innerHTML = object;
      });
      animateCSS(index, "headShake");
      animateCSS(badChoice, "heartBeat");
      console.log(document.getElementById(badChoice).classList);
      badChoice = badChoice - 1;
    }
  }
  document.querySelector("#Pays").textContent = CountryChoice[indexJeu];
}