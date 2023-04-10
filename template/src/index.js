import React from "react"
import ReactDOM from "react-dom/client"
import ReactGA from "react-ga4"
import App from "./App"
import DocConfig from "./config/DocConfig"
import "./index.css"

ReactGA.initialize(DocConfig.MEASUREMENT_ID, { debug: true })

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  //   <React.StrictMode>
  <App />,
  //   </React.StrictMode>,
)
