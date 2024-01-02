import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Section from "../components/Section.js";

class HomePage extends Component {
  render() {
    return createElement('div', {},
      createElement(Header, { title: 'Home', to: '/home' }),
      createElement('main', {},
        createElement(Section, {},
          createElement('div', {class: "home-title"}, 
          createElement('h1', {}, "Paris 2024"),
          createElement('h3', {}, "Venez découvrir les lieux des JO de Paris 2024 !"),
         
          ),
        ),
        createElement(Section, {},
          createElement('div', {class: "home-title"}, 
          createElement('h1', {}, "Paris 2024"),
          createElement('h3', {}, "Venez découvrir les lieux des JO de Paris 2024 !"),
         
          ),
        ),
      )
    );
  }
}

export default HomePage;