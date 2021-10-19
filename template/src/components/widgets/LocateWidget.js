import Locate from "esri/widgets/Locate";
import "./widgets.scss";

function LocateWidget(view) {
  const locateBtn = new Locate({ view });
  view.ui.add(locateBtn, "bottom-right");
}
export default LocateWidget;

// Widgets called in Map.js
