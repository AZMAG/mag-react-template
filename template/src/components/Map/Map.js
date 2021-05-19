import React, { useRef, useEffect } from "react";
import ArcGISMap from "esri/Map";
import MapView from "esri/views/MapView";

import ZoomWidget from "../widgets/ZoomWidget";
import HomeWidget from "../widgets/HomeWidget";
import LocateWidget from "../widgets/LocateWidget";
import BasemapToggleWidget from "../widgets/BasemapToggleWidget";
import SearchWidget from "../widgets/SearchWidget";
import LogoWidget from "../widgets/LogoWidget";

import "./Map.css";

let map;
let view;

function MainMap() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      // basemap info
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
      map = new ArcGISMap({
        basemap: "osm",
      });

      view = new MapView({
        map,
        container: mapDiv.current,
        center: [-111.956, 33.409],
        zoom: 7,
        constraints: {
          rotationEnabled: false,
          minZoom: 7,
        },
        ui: {
          components: ["attribution"],
        },
        popup: {
          dockEnabled: false,
          collapseEnabled: false,
          dockOptions: {
            buttonEnabled: false,
            breakpoint: false,
          },
        },
      });
    }
    // Call Widgets
    ZoomWidget(view);
    HomeWidget(view);
    LocateWidget(view);
    BasemapToggleWidget(view);
    LogoWidget(view);
    SearchWidget(view);
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

function getMapRef() {
  return { map, view };
}

function displayMessage(info) {
  console.log(info);
}

export { getMapRef, MainMap };
