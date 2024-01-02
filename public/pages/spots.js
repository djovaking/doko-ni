import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Section from "../components/Section.js";

class Spots extends Component {
  render() {
    return createElement('div', {},
      createElement(Header, { title: 'Spots', to: '/spots' }),
      createElement('main', {},
        createElement(Section, {},
            createElement("iframe", {
                src: "https://data.opendatasoft.com/explore/embed/dataset/paris-2024-sites-olympiques-et-paralympiques-franciliens@datailedefrance/table/?flg=fr-fr&refine.sites_olympiques_paralympiques=Site%20olympique&basemap=jawg.streets&location=13,48.90016,2.18521&static=false&datasetcard=false", 
                width: "100%", 
                height: "100%", 
                frameborder: "0"
            }),
        ),
      )
    );
  }
}

export default Spots;