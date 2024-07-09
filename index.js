// Les skills
const yogaskills = document.getElementById("yogaskills");
let tableauYoga = ["HTML", "CSS", "JavaScript", "LocalStorage"];
yogaskills.innerHTML = tableauYoga
  .map((tech) => `<h3>${tech} </h3>`)
  .join(" - ");

const countryskills = document.getElementById("countryskills");
let tableauCountry = [
  "HTML",
  "CSS",
  "JavaScript",
  "API",
  "Manipulation de données JSON country",
];
countryskills.innerHTML = tableauCountry
  .map((tech) => `<h3>${tech} </h3>`)
  .join(" - ");

const formskills = document.getElementById("formskills");
let tableauForm = ["HTML", "CSS", "JavaScript", "REGEX"];
formskills.innerHTML = tableauForm
  .map((tech) => `<h3>${tech} </h3>`)
  .join(" - ");

const gamingskills = document.getElementById("gamingskills");
let tableauGaming = ["HTML", "CSS"];
gamingskills.innerHTML = tableauGaming
  .map((tech) => `<h3>${tech} </h3>`)
  .join(" - ");
