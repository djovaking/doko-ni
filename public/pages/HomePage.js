import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Section from "../components/Section.js";
import Countdown from "../components/Countdown.js";

class HomePage extends Component {
  render() {
    return createElement('div', {},
      createElement(Header, { title: 'Home', to: '/home' }),
      createElement('main', {},
        createElement(Section, {},
          createElement('img', { 
            src: './src/media/accueil.png', // Remplacez ceci par le chemin de votre image
            alt: 'Paris 2024 Image',
            style: { width: '100%', marginBottom: '20px' } // Style pour la pleine largeur et un espacement en bas
          }),
          createElement('div', { class: "home-title" },
            createElement('h1', {}, "Paris 2024"),
            createElement('h3', {}, "Venez découvrir les lieux des JO de Paris 2024 !"),
            createElement(Countdown)
          )
        ),
      )
    );
  }
}

export default HomePage;
