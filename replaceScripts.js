const replace = require("replace-in-file");
const pkg = require("./package.json");

// README
const reVersion = new RegExp(
  "(### version | )([0-9]+)(?:.([0-9]+))(?:.([0-9]+))"
);
const newVersion = " " + pkg.version;

const reUpdate = new RegExp("(Updated | )([0-9]{4}-[0-9]{2}-[0-9]{2})");
const newUpdate = " " + pkg.date;

//LICENCE
const reCopyDate = new RegExp("([0-9]{4})");
const newCopyDate = pkg.copyright;

const options = {
  files: ["./README.md", "./LICENSE"],
  from: [reVersion, reUpdate, reCopyDate],
  to: [newVersion, newUpdate, newCopyDate],
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
