import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "../fonts/font.css";
import Button from "@mui/material/Button";
import "animate.css";

const images = require.context("../img/flags/", true);
const imageList = images.keys().map((image) => images(image));

let ArleadyGet = [];
let indexJeu = Math.floor(Math.random() * 243);
let score = 0;
let badChoice = 0;
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
        id="PaysName"
        sx={{
          width: "${window.innerWidth}",
          height: "auto",
          paddingBottom: "30px",
          position: "-webkit - sticky",
          position: "sticky",
          top: "0",
          zIndex: "10",
          backgroundColor: "#FCF6F3",
        }}
      >
        <Typography
          item
          fontWeight="400"
          fontFamily="Inter"
          variant="h3"
          textAlign="center"
        >
          <span id="Pays">{CountryChoice[indexJeu]}</span>
          <br />
          Score : <span id="score">{score}</span>
          <br />
          Faute : <span id="faute">{badChoice}</span>/5
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
                NextLevel(image, index);
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

export default Index;

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
  if (badChoice + 1 === 5) {
    badChoice = badChoice + 1;
    window.location.reload();
  } else {
    if (index === indexJeu) {
      score = score + 1;
      document.querySelector("#score").textContent = score;
      ArleadyGet.push(name);
      document.getElementById(name).style.display = "none";
      document.getElementById(name).style.visibility = "hidden";
      indexJeuArleadyGet.push(indexJeu);
      while (indexJeuArleadyGet.includes(indexJeu)) {
        indexJeu = Math.floor(Math.random() * 243);
      }
    } else {
      badChoice = badChoice + 1;
      animateCSS(index, "headShake");
    }
  }
  document.querySelector("#faute").textContent = badChoice;
  document.querySelector("#Pays").textContent = CountryChoice[indexJeu];
}
