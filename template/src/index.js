import React from "react"
import ReactDOM from "react-dom/client"
import ReactGA from "react-ga4"
import App from "./App"
import "./index.css"

ReactGA.initialize("G-B129P7KDMQ", { debug: true })

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  //   <React.StrictMode>
  <App />,
  //   </React.StrictMode>,
)
