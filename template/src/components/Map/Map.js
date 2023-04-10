import React, { useRef, useEffect } from "react"
import esriConfig from "@arcgis/core/config"
import ArcGISMap from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"

import ZoomWidget from "../Widgets/zoomWidget"
import HomeWidget from "../Widgets/homeWidget"
import LocateWidget from "../Widgets/locateWidget"
import BasemapToggleWidget from "../Widgets/basemapToggleWidget"
import SearchWidget from "../Widgets/searchWidget"
import LogoWidget from "../Widgets/logoWidget"
import DocConfig from "../../config/DocConfig"

let map
let view

function MainMap() {
  const mapDiv = useRef(null)

  useEffect(() => {
    if (mapDiv.current) {
      esriConfig.apiKey = DocConfig.esriConfig_apiKey
      // basemap info
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
      map = new ArcGISMap({
        basemap: "osm",
      })

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
      })
    }
    // Call Widgets
    ZoomWidget(view)
    HomeWidget(view)
    LocateWidget(view)
    BasemapToggleWidget(view)
    LogoWidget(view)
    SearchWidget(view)
  }, [])

  return <div id="map" className="h-full w-full m-auto" ref={mapDiv}></div>
}

function getMapRef() {
  return { map, view }
}

function displayMessage(info) {
  console.log(info)
}

export { getMapRef, MainMap }
