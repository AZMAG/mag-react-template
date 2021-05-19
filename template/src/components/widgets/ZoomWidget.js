import Zoom from "esri/widgets/Zoom";
import "./Widgets.css";

function ZoomWidget(view) {
  const zoom = new Zoom({ view });
  view.ui.add(zoom, "bottom-right");
}

export default ZoomWidget;

// Widgets called in Map.js
