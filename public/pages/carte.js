import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Section from "../components/Section.js";

class Carte extends Component {
  render() {
    return createElement('div', {},
      createElement(Header, { title: 'Home', to: '/home' }),
      createElement('main', {},
        createElement(Section, {},
            createElement("iframe", {
                src: "https://data.opendatasoft.com/explore/embed/dataset/paris-2024-sites-olympiques-et-paralympiques-franciliens@datailedefrance/map/?flg=fr-fr&refine.sites_olympiques_paralympiques=Site%20olympique&basemap=jawg.streets&location=12,48.86133,2.30207&static=false&datasetcard=false&scrollWheelZoom=false", 
                width: "100%", 
                height: "100%", 
                frameborder: "0"
            }),
        ),
      )
    );
  }
}

export default Carte;