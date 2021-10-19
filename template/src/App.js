import React, { useRef, useEffect } from "react";
import { MainMap } from "./components/Map/Map";

import "@arcgis/core/assets/esri/themes/light/main.css";
// import "@arcgis/core/assets/esri/themes/dark/main.css";

import "./styles/App.scss";

import LogoWidget from "./components/widgets/LogoWidget";

function App() {
  return (
    <>
      <MainMap visible={true} />
      <LogoWidget />
    </>
  );
}

export default App;
