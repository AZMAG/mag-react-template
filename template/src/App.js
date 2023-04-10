import React from "react"
import "@progress/kendo-theme-default/dist/all.css"
import "@arcgis/core/assets/esri/themes/light/main.css"

import { MainMap } from "./components/Map"
import LogoWidget from "./components/Widgets/logoWidget"
import { DataProvider } from "./context/DataContext"

export default function App() {
  return (
    <body className="flex flex-col h-screen w-screen">
      <DataProvider>
        <MainMap visible={true} />
        <LogoWidget />
      </DataProvider>
    </body>
  )
}
