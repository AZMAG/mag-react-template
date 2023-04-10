![](http://geo.azmag.gov/maps/readonaz/app/resources/img/maglogo_black.png)

# mag-react-template

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/AZMAG/mag-react-template?&logo=github&style=flat-square)
![GitHub Release Date](https://img.shields.io/github/release-date/AZMAG/mag-react-template?&logo=github&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/AZMAG/mag-react-template?&logo=github&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/AZMAG/mag-react-template?&logo=github&style=flat-square)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/AZMAG/mag-react-template?style=flat-square)
![npm](https://img.shields.io/npm/v/cra-template-mag-react-template?color=crimson&logo=npm&style=flat-square)
![semver](https://img.shields.io/badge/semver-2.0.0-blue?style=flat-square)
[![GitHub license](https://img.shields.io/github/license/AZMAG/mag-react-template?style=flat-square)](https://github.com/AZMAG/mag-react-template/blob/main/LICENSE)

## MAG React Template for ArcGIS API JavaScript with create-react-app

This repo is a Maricopa Associations of Governments (MAG) template to create a react project using all of the features of Create React App.

## :key: Keywords

`react` `react-template` `create-react-app` `cra-template` `template` `mag` `maps`

## :gear: Installation

When creating a new react-project, run the following command:

### Install with npx

```
npx create-react-app [my-app-name] --template mag-react-template
```

<details><summary>Install with <code>yarn</code></summary><p>

```bash
$ yarn create-react-app [my-app-name] --template mag-react-template
```

</p></details>

`[my-app-name]` should be changed to the actual name of your project and must follow the convention package.json guidelines.

[package.json Guidelines](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

## Output

Running this commands will create a directory called `[my-app-name]` inside the current folder. Inside that directory, it will generate the initial project structure and install the dependencies:

<details><summary><strong>Template Directory</strong></summary><p>

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

</p></details>

## Get Started

Once the installation is done, you can open your project folder:

```
cd [my-app-name]
```

In the project directory, you can run:

```
npm start
```

Runs the app in development mode.
Open `http://localhost:3000` to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

## Version

### version | 1.5.4

- #### Updated | 2023-04-10
- #### Created | 2021-05-18

Releases will be numbered with the following format:

**`<major>.<minor>.<patch>`**

And constructed with the following guidelines:

1. **MAJOR** version when you make incompatible API changes **bumps the major** resets minor and patch
2. **MINOR** version when you add functionality in a backwards-compatible manner **bumps the minor** resets patch
3. **PATCH** version when you make backwards-compatible bug fixes and misc changes **bumps only the patch**

## Technologies

A list of technologies used within the project:

- [Create React App](https://github.com/facebook/create-react-app)
- [React-Bootstrap](https://react-bootstrap.github.io/)

<a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="31px" height="31px"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="31px" height="31px"></a>
<a href="https://www.w3.org/TR/html5/" title="HTML5"><img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="31px" height="31px"></a>
<a href="https://www.w3.org/TR/CSS/" title="CSS3"><img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="31px" height="31px"></a>
<a href="https://sass-lang.com/" title="Sass"><img src="https://github.com/get-icon/geticon/raw/master/icons/sass.svg" alt="Sass" width="31px" height="31px"></a>
<a href="https://github.com/sass/node-sass" title="Node-Sass"><img src="https://github.com/get-icon/geticon/raw/master/icons/node-sass.svg" alt="Node-Sass" width="31px" height="31px"></a>
<a href="https://getbootstrap.com/" title="Bootstrap"><img src="https://github.com/get-icon/geticon/raw/master/icons/bootstrap.svg" alt="Bootstrap" width="31px" height="31px"></a>
<a href="https://www.telerik.com/kendo-react-ui/components/" title="KendoReact"><img src="https://github.com/get-icon/geticon/raw/master/icons/progress.svg" alt="KendoReact" width="31px" height="31px"></a>
<a href="https://fontawesome.com/" title="Font-Awesome"><img src="https://github.com/get-icon/geticon/raw/master/icons/font-awesome.svg" alt="Font-Awesome" width="31px" height="31px"></a>
<a href="https://eslint.org/" title="ESLint"><img src="https://github.com/get-icon/geticon/raw/master/icons/eslint.svg" alt="ESLint" width="31px" height="31px"></a>
<a href="https://prettier.io/" title="Prettier"><img src="https://github.com/get-icon/geticon/raw/master/icons/prettier.svg" alt="Prettier" width="31px" height="31px"></a>
<a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="31px" height="31px"></a>
<a href="https://code.visualstudio.com/" title="vscode"><img src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="vscode" width="31px" height="31px"></a>

## Requirements

Use of the ArcGIS API for JavaScript is subject to the terms described in the product-specific terms of use. Learn more about licensing here.

## Resources

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with `create-react-app`.

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Good YouTube Video: [Create React App Templates - Learn how to create your own template for CRA](https://www.youtube.com/watch?v=m6hHfkOYYuw&t=658s)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## :star: Credits

`Maricopa Association of Governments (MAG) and the MAG member agencies`

## :zap: Disclaimer

- [DISCLAIMER](DISCLAIMER.md)

## :warning: Licensing

Copyright 2023 Maricopa Association of Governments (MAG)

This project is licensed under the MIT license.

[![GitHub license](https://img.shields.io/github/license/AZMAG/mag-react-template?style=flat-square)](https://github.com/AZMAG/mag-react-template/blob/main/LICENSE)

[(Back to top)](#mag-react-template)
