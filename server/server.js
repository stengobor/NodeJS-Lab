const path = require('path');
const fs = require('fs');

let chirpPath = path.join(__dirname, "chirps.json");

let chirps = [
  {
    id: 1,
    name: "Sofi",
    text: "I'm saying random things because I need to.",
  },
  {
    id: 2,
    name: "Rich",
    text: "You're my favorite person.",
  },
  {
    id: 3,
    name: "MoMo",
    text: "Ruff, ruff",
  },
  {
    id: 4,
    name: "JoJo",
    text: "Yeah",
  },
  {
    id: 5,
    name: "Bo",
    text: "blah blah",
  },
];

const chirpData = JSON.stringify(chirps);
fs.writeFileSync(chirpPath, chirpData);
const chripsFromFile = fs.readFileSync(chirpPath);
console.log(JSON.parse(chripsFromFile));




// readFile(
//   writeFile, chirps,
//   {
//     encoding: "UTF-8",
//   },
//   (err, chirps) => {
//     console.log(chirps);
//   }
// );
