![](http://geo.azmag.gov/maps/readonaz/app/resources/img/maglogo_black.png)

# mag-react-template

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/AZMAG/mag-react-template)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/AZMAG/mag-react-template)
[![npm version](https://badge.fury.io/js/cra-template-mag-react-template.svg)](https://badge.fury.io/js/cra-template-mag-react-template)
[![GitHub issues](https://img.shields.io/github/issues/AZMAG/mag-react-template)](https://github.com/AZMAG/mag-react-template/issues)
[![GitHub license](https://img.shields.io/github/license/AZMAG/mag-react-template)](https://github.com/AZMAG/mag-react-template/blob/main/LICENSE)

## MAG React Template for ArcGIS API JavaScript with create-react-app

This repo is a Maricopa Associations of Governments (MAG) template to create a react project using all of the features of Create React App.

## Get Started

```
npx create-react-app [my-app-name] --template mag-react-template
```

`[my-app-name]` should be changed to the actual name of your project and must follow the convention package.json guidelines.

[package.json Guidelines](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

## Output

Running this commands will create a directory called `[my-app-name]` inside the current folder. Inside that directory, it will generate the initial project structure and install the dependencies:

```
[my-app-name]

├── README.md
├── LICENSE
├── config-overrides.js
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── images
|   |   |── images
|   |   |   └── favicons
│   ├── favicon.ico
│   ├── google.html
│   ├── humans.txt
│   ├── index.html
│   ├── LICENSE
│   ├── manifest.json
│   ├── robots.txt
│   └── images
|       |── images/favicons
└── src
    ├── components
    |   |── Layers
    |   |── Map
    |   |   |── map.scss
    |   |   |── map.js
    |   |   |__ package.json
    |   |── Widgets
    |   |   |── basemapToggleWidget.js
    |   |   |── homeWidget.js
    |   |   |── locateWidget.js
    |   |   |── logoWidget.js
    |   |   |── searchWidget.js
    |   |   |── widgets.scss
    |   |   |__ zoomWidget.js
    ├── config
    ├── context
    |   |── DataContext.js
    ├── images
    |   |── various images
    ├── styles
    |   |── colors.scss
    |   |── typography.scss
    |   |── App.scss
    |   └── index.scss
    ├── App.js
    ├── App.test.js
    ├── index.js
    ├── reportWebVitals.js
    └── setupTests.js
```

## Installation

Once the installation is done, you can open your project folder:

```
cd [my-app-name]
```

```
npm start
```

Runs the app in development mode. Open http://localhost:2021 to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

## Version

### version | 1.1.1

- #### Updated | 2021-11-09
- #### Created | 2021-05-18

Releases will be numbered with the following format:

**`<major>.<minor>.<patch>`**

And constructed with the following guidelines:

1. **MAJOR** version when you make incompatible API changes **bumps the major** resets minor and patch
2. **MINOR** version when you add functionality in a backwards-compatible manner **bumps the minor** resets patch
3. **PATCH** version when you make backwards-compatible bug fixes and misc changes **bumps only the patch**

## Technologies

A list of technologies used within the project:

- [React](https://reactjs.org/): Version 17.02
- [Create React App](https://github.com/facebook/create-react-app): Version 4.0.3
- [React-Bootstrap](https://react-bootstrap.github.io/) Version 2.0.0
- [Bootstrap](https://getbootstrap.com/) Version 5.1.x
- [Kendo React Ui](https://www.telerik.com/kendo-react-ui/) Version 4.10.0

## Requirements

Use of the ArcGIS API for JavaScript is subject to the terms described in the product-specific terms of use. Learn more about licensing here.

## Resources

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with `create-react-app`.

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Credits

`Maricopa Association of Governments (MAG) and the MAG member agencies`

## Disclaimer

- [DISCLAIMER](DISCLAIMER.md)

## Licensing

Copyright 2021 Maricopa Association of Governments (MAG)

Code released under the MIT license.

- [LICENSE](LICENSE)

[(Back to top)](#Get-Started)
