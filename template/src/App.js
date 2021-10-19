import React from "react";
import { MainMap } from "./components/Map";

import "@arcgis/core/assets/esri/themes/light/main.css";
// import "@arcgis/core/assets/esri/themes/dark/main.css";

import "./styles/App.scss";

import LogoWidget from "./components/Widgets/logoWidget";

function App() {
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
