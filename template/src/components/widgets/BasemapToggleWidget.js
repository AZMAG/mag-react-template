import BasemapToggle from "esri/widgets/BasemapToggle";
import "./Widgets.const map = new Map({
  basemap: "streets"
});
const view = new SceneView({
  container: "viewDiv",
  map:map
});css";

function BasemapToggleWidget(view) {
  const basemapToggle = new BasemapToggle({
    view,
    nextBasemap: "satellite",
    visibleElements: {
      title: true,
    },
  });
  view.ui.add(basemapToggle, "bottom-right");
}

export default BasemapToggleWidget;

// Widgets called in Map.js
