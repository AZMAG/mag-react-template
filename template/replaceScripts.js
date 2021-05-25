const replace = require("replace-in-file");
const pkg = require("./package.json");

// README
const reVersion = new RegExp(
  "(### version | )([0-9]+)(?:.([0-9]+))(?:.([0-9]+))"
);
const newVersion = " " + pkg.version;

const reUpdate = new RegExp("(Updated | )([0-9]{4}-[0-9]{2}-[0-9]{2})");
const newUpdate = " " + pkg.date;

// LICENCE
const reCopyDate = new RegExp("([0-9]{4})");
const newCopyDate = pkg.copyright;

// Humans.txt
const humansName = pkg.name;

// manifiest.json

// index.html
const reIndexVersion = new RegExp(
  '(<meta name="version" content=")([0-9]+)(?:.([0-9]+))(?:.([0-9]+))(">)'
);
const newIndexVersion = pkg.version;

const reIndexDate = new RegExp(
  '(<meta name="revision-date" content=")[0-9]{4}-[0-9]{2}-[0-9]{2}(">)'
);
const newIndexDate = pkg.date;

const reIndexBuild = new RegExp(
  '(<meta name="build-info" content=")([0-9]+)(?:.([0-9]+))(?:.([0-9]+))(?:.)(d{12})(">)'
);
const newIndexBuild = pkg.version + "'.'" + Date("yyyymmddHHMM");

const options = {
  files: [
    "./README.md",
    "./LICENSE",
    "./public/humans.txt",
    "./public/manifest.json",
    "./public/index.html",
  ],
  from: [reVersion, reUpdate, reCopyDate, "NAME", "mag-react-template"],
  to: [newVersion, newUpdate, newCopyDate, pkg.name, pkg.name],
};

replace(options)
  .then((results) => {
    console.log("Replacement results:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// DOCUMENTATION
// https://www.emgoto.com/nodejs-write-file/
