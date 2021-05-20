![](http://geo.azmag.gov/maps/readonaz/app/resources/img/maglogo_black.png)

# MAG React Template for ArcGIS API JavaScript with create-react-app

[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This repo is a Maricopa Associations of Governments (MAG) template to create a react project using all of the features of Create React App.

## Get Started

```
npx create-react-app [my-app-name] --template mag-react-template
```

## Output

Running this commands will create a directory called `[my-app-name]` inside the current folder. Inside that directory, it will generate the initial project structure and install the dependencies:

```
my-app-name
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

Once the installation is done, you can open your project folder:

```
cd [my-app-name]
```

```
npm start
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

## Version

### version | 1.0.4

- #### Updated | 2021-05-19

- #### Created | 2021-05-18

Releases will be numbered with the following format:

**`<major>.<minor>.<patch>`**

And constructed with the following guidelines:

1. **MAJOR** version when you make incompatible API changes **bumps the major** resets minor and patch
2. **MINOR** version when you add functionality in a backwards-compatible manner **bumps the minor** resets patch
3. **PATCH** version when you make backwards-compatible bug fixes and misc changes **bumps only the patch**

## Credits

`Maricopa Association of Governments (MAG) and the MAG member agencies`

## Requirements

Use of the ArcGIS API for JavaScript is subject to the terms described in the product-specific terms of use. Learn more about licensing here.

## Resources

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with `create-react-app`.

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Licensing

Copyright 2021 Maricopa Association of Governments (MAG)

Code released under the MIT license.

- [LICENSE](LICENSE)
