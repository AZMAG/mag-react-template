import React from "react";
import ReactGA from "react-ga";
import "bootstrap/dist/css/bootstrap.min.css";
import "@progress/kendo-theme-default/dist/all.css";
import "@arcgis/core/assets/esri/themes/light/main.css";
// import "@arcgis/core/assets/esri/themes/dark/main.css";
import "./styles/App.scss";
import { MainMap } from "./components/Map";
import LogoWidget from "./components/Widgets/logoWidget";
import { DataProvider } from "./context/DataContext";

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
        <DataProvider>
          <MainMap visible={true} />
          <LogoWidget />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
