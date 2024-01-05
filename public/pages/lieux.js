// pages/lieux.js
import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Section from "../components/Section.js";
import data from "../data/data.js";
import TableWithSearchBar from "../components/TableWithSearchBar.js";
import Main from "../components/Main.js";

class Lieux extends Component {
  componentDidMount() {
    console.log("Component did mount");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
      }, (error) => {
        console.error("Error occurred while getting geolocation: " + error.message);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
  render() {
    return createElement('div', {},
      createElement(Header, { title: 'Lieux', to: '/lieux' }),
      createElement(Main, {},
        createElement(Section, {},
          createElement('h2', {class:"spots-header"}, 'Retrouvez ici les lieux, les sprots et infrastructures pour les Jeux Olympiques de Paris 2024'),
          createElement(TableWithSearchBar, { data: data }),
        ),
      )
    );
  }
}

export default Lieux;