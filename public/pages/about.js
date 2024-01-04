import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Section from "../components/Section.js";

class About extends Component {
  render() {
    return createElement('div', {},
      createElement(Header, { title: 'A Propos', to: '/about' }),
      createElement('main', {},
        createElement(Section, {},
          createElement(
            "div",
            { class: "about-content" },
            createElement("h1", {}, "À propos des Jeux olympiques 2024 à Paris"),
            createElement("p", {}, "Bienvenue sur notre site dédié aux Jeux olympiques de 2024 à Paris!"),
            createElement("p", {}, "Cet événement mondial est prévu pour célébrer l'excellence sportive et la diversité culturelle."),
            createElement("p", {}, "Notre objectif est de fournir des informations détaillées sur les lieux, les événements et les athlètes pour vous permettre de profiter pleinement de cette grande célébration sportive."),
            createElement("p", {}, "Explorez notre site pour en savoir plus sur les Jeux olympiques de 2024 à Paris!"),
            createElement(
              "div",
              { class: "button-container" },
              createElement("button", { class: "redirect-button", onclick: () => { window.location.href = `${window.location.pathname}/events`; } }, "Voir les événements"),
              createElement("button", { class: "redirect-button", onclick: () => { window.location.href = `${window.location.pathname}/spots`; } }, "Voir les spots")

            ),
            createElement("div",
            {class: "image-container"},
            
            createElement("img", {src: "https://media.istockphoto.com/id/1568979488/fr/photo/anneaux-olympiques-devant-lh%C3%B4tel-de-ville-au-printemps-2023-paris-france.jpg?s=612x612&w=0&k=20&c=XQ4MTCfyZteY3852gNiLKz5ObkBnaXDgc-89ra76IQI=", alt: "Logo JO 2024",height:"250"}),
            createElement("img", {src: "https://medias.paris2024.org/uploads/2022/04/GettyImages-82508119-scaled.jpg?x-oss-process=image/resize,w_2560,h_1848,m_lfit/format,jpeg", alt: "Logo JO 2024" ,height:"250"}),
            createElement("img", {src: "https://media.istockphoto.com/id/1298559355/fr/photo/drapeaux-du-monde-ondulant-dans-le-vent.jpg?s=612x612&w=0&k=20&c=adTv_q4CR-BldzqS7Pt8QNcu9Yn4ZGlpAycxLzlXfhk=", alt: "Logo JO 2024" ,height:"250"})
            
           ),
        createElement(Footer)
      )
    )
      )
    );
  }
}

export default About;
