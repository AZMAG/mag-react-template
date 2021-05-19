import Home from "esri/widgets/Home";
import "./Widgets.css";

function HomeWidget(view) {
  const HomeWidget = new Home({ view });
  view.ui.add(HomeWidget, "bottom-right");
}

export default HomeWidget;

// Widgets called in Map.js
