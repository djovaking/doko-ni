import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import TimerClock from "../components/TimerClock.js";
import FAQ from "../components/FAQ.js";

class About extends Component {

  render() {
    return createElement('div', {},
      createElement(Header, { title: 'Home', to: '/home' }),
      createElement(Main, {},
        
        createElement("div", { class: "hero-title" },
          createElement('div', {class: "home-title"}, 
          createElement('h1', {}, "Paris 2024"),
          createElement('h3', {}, "Venez découvrir les lieux des JO de Paris 2024 !"),
         
          ),
        ),
        
        createElement("div", { class: "hero-timer" },
          createElement(TimerClock, {}),),
          createElement("div",{class:"FAQ"},
            createElement("div",{class:"faq-titre"},"Bienvenue sur Paris 2024 !"),
            createElement("div",{class:"faq-info"},"Découvrez l'esprit olympique au cœur de la Ville Lumière. Bienvenue sur notre page dédiée aux Jeux Olympiques de Paris 2024. Cet événement emblématique promet de rassembler le monde entier dans une célébration de l'athlétisme, de l'inclusion et de la passion pour le sport. Découvrez tout ce que vous devez savoir sur les Jeux Olympiques de Paris, y compris les dates clés, les sites emblématiques et les expériences uniques qui vous attendent."),
          

          ),
          createElement("div",{class:"FAQ-2"},
            createElement("div",{class:"faq-titre"},"Les Dates à Retenir"),
            createElement("div",{class:"faq-info"},"Les Jeux Olympiques de Paris 2024 auront lieu du vendredi 26 juillet au dimanche 11 août. Pendant ces jours palpitants, la ville vibrera au rythme de la compétition, de la camaraderie et de l'excellence sportive."),
          
          ),
          createElement("div",{class:"FAQ"},
          createElement("div",{class:"faq-titre"},"Les Sites Olympiques"),
          createElement("div",{class:"faq-info"},"Paris 2024 réunira les meilleurs athlètes du monde dans des sites emblématiques. Explorez les lieux mythiques qui accueilleront les compétitions et découvrez l'héritage olympique qu'ils laisseront à la ville."),
        
        ),
        createElement("div",{class:"FAQ-2"},
          createElement("div",{class:"faq-titre"},"La Culture Olympique"),
          createElement("div",{class:"faq-info"},"Plongez-vous dans l'esprit olympique en explorant la riche histoire et les valeurs qui animent les Jeux Olympiques. Découvrez comment Paris 2024 célèbre la diversité, l'égalité et l'inclusion à travers des programmes culturels et éducatifs passionnants."),
        
        ),
        createElement("div",{class:"FAQ"},
          createElement("div",{class:"faq-titre"},"Comment Participer ?"),
          createElement("div",{class:"faq-info"},"Vous souhaitez être partie prenante de cette expérience unique ? Découvrez comment vous pouvez soutenir les athlètes, obtenir des billets pour assister aux événements en direct et participer aux festivités qui animeront la ville pendant cette période."),
        
        ),
        createElement("div",{class:"FAQ-2"},
          createElement("div",{class:"faq-titre"},"Restez Connecté"),
          createElement("div",{class:"faq-info"},"Suivez-nous sur les réseaux sociaux et inscrivez-vous à notre newsletter pour rester informé des dernières nouvelles, des événements spéciaux et des opportunités exclusives liées aux Jeux Olympiques de Paris 2024"),
        
        ),
      )
    );
  }
}

export default About;