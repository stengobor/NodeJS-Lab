import { join } from "path";
import { readFile } from "fs";

let dataPath = join(__dirname, ".../data.json");

let chirps = [
  {
    name: "Sofi",
    text: "I'm saying random things because I need to.",
  },
  {
    name: "Rich",
    text: "You're my favorite person.",
  },
  {
    name: "MoMo",
    text: "Ruff, ruff",
  },
  {
    name: "JoJo",
    text: "Yeah",
  },
  {
    name: "Bo",
    text: "blah blah",
  },
];

readFile(
  dataPath, chirps,
  {
    encoding: "UTF-8",
  },
  (err, chirp) => {
    console.log(chirp);
  }
);
