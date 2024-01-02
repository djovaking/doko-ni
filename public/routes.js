import about from "./pages/about.js";
import HomePage from "./pages/HomePage.js";
import Events from "./pages/events.js";
import Carte from "./pages/carte.js";
import Spots from "./pages/spots.js";

export default {
  "/": HomePage,
  "/HomePage": HomePage,
  "/about": about,
  "/carte": Carte,
  "/events": Events,
  "/spots": Spots,
  "*": HomePage,
};  