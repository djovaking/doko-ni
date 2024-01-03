import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Section from "../components/Section.js";

class About extends Component {
  render() {
    return createElement(
      "div",
      { class: "about-page" },
      createElement(Header, {title:'A Propos', to: '/about' }),
      createElement(
        "div",
        { className: "about-content" },
        createElement("h1", {}, "À propos des Jeux olympiques 2024 à Paris"),
        createElement("p", {}, "Bienvenue sur notre site dédié aux Jeux olympiques de 2024 à Paris!"),
        createElement("p", {}, "Cet événement mondial est prévu pour célébrer l'excellence sportive et la diversité culturelle."),
        createElement("p", {}, "Notre objectif est de fournir des informations détaillées sur les lieux, les événements et les athlètes pour vous permettre de profiter pleinement de cette grande célébration sportive."),
        createElement("p", {}, "Explorez notre site pour en savoir plus sur les Jeux olympiques de 2024 à Paris!"),
        createElement(
          "div",
          { class: "button-container" },
          createElement("button", { class: "redirect-button", onclick: () => { window.location.href = '/events'; } }, "Voir les événements"),
          createElement("button", { class: "redirect-button", onclick: () => { window.location.href = '/spots'; } }, "Voir les spots")

        ),
        createElement(Footer)
      )
      
    );
  }
}

export default About;
