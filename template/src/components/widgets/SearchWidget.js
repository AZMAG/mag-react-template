import Search from "esri/widgets/Search";
import "./widgets.scss";

function SearchWidget(view) {
  const SearchWidget = new Search({ view });
  view.ui.add(SearchWidget, "top-right");
}

export default SearchWidget;

// Widgets called in Map.js
