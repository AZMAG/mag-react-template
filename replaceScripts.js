const replace = require("replace-in-file")
const pkg = require("./package.json")

// README
const reVersion = new RegExp("(### version | )([0-9]+)(?:.([0-9]+))(?:.([0-9]+))")
const newVersion = " " + pkg.version

const reUpdate = new RegExp("(Updated | )([0-9]{4}-[0-9]{2}-[0-9]{2})")
const newUpdate = " " + pkg.date

const reCopyRightDate = new RegExp("(Copyright )([0-9]{4})")
const newCopyRightDate = "Copyright " + pkg.copyright

const readme = {
  files: "./README.md",
  from: [reVersion, reUpdate, reCopyRightDate],
  to: [newVersion, newUpdate, newCopyRightDate],
}

// LICENCE
const reCopyDate = new RegExp("(Copyright \\(c\\) )([0-9]{4})")
const newCopyDate = "Copyright (c) " + pkg.copyright

const license = {
  files: ["./LICENSE", "./public/LICENSE"],
  from: [reCopyDate],
  to: [newCopyDate],
}

;(async () => {
  try {
    const readmeResults = await replace(readme)
    const licenseResults = await replace(license)
    const results = { readmeResults, licenseResults }
    console.log("Replacement results:", results)
  } catch (error) {
    console.error("Error occurred:", error)
  }
})()

// DOCUMENTATION
// https://www.emgoto.com/nodejs-write-file/
