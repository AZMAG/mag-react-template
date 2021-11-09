import React from "react";
import ReactGA from "react-ga";
import { MainMap } from "./components/Map";

import "@arcgis/core/assets/esri/themes/light/main.css";
// import "@arcgis/core/assets/esri/themes/dark/main.css";

import "./styles/App.scss";

import LogoWidget from "./components/Widgets/logoWidget";

function App() {
  const TRACKING_ID = "UA-29422512-1";
  ReactGA.initialize(TRACKING_ID, {
    debug: true,
    titleCase: false,
    gaOptions: {},
  });

  return (
    <>
      <div className="app-container">
        <MainMap visible={true} />
        <LogoWidget />
      </div>
    </>
  );
}

export default App;
