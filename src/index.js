import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserPlus,
  faGlobeAmericas,
  faTools,
  faPen,
  faAngleDown,
  faHome,
  faUserCircle,
  faSignOutAlt,
  faChevronDown,
  faGlobe,
  faBook,
  faBell,
  faBullhorn,
  faPlus,
  faTrashAlt,
  faCompass,
  faHourglassHalf,
  faSitemap,
  faCog,
  faFeatherAlt,
  faFolder,
  faPalette,
  faStickyNote,
  faFlask,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserPlus,
  faGlobeAmericas,
  faTools,
  faPen,
  faAngleDown,
  faHome,
  faUserCircle,
  faSignOutAlt,
  faChevronDown,
  faGlobe,
  faBook,
  faBell,
  faBullhorn,
  faPlus,
  faTrashAlt,
  faCompass,
  faHourglassHalf,
  faSitemap,
  faCog,
  faFeatherAlt,
  faFolder,
  faPalette,
  faStickyNote,
  faFlask,
  faEdit
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
