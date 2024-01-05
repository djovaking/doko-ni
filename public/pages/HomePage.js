import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import TimerClock from "../components/TimerClock.js";
import { BrowserLink } from "../components/BrowserRouter.js";


class HomePage extends Component {
  render() {
    return createElement('div', {},
      createElement(Header, { title: 'Home', to: '/home' }),
      createElement(Main, {},
        createElement("div", { class: "hero-banner" },
        ),
        createElement("div", { class: "hero-title" },
          createElement('div', {class: "home-title"}, 
          createElement('h1', {}, "Paris 2024"),
          createElement('h3', {}, "Venez découvrir les lieux des JO de Paris 2024 !"),
          ),
        ),
        createElement("div", { class: "hero-timer" },
          createElement(TimerClock, {}),
        ),
        createElement("div", { class: "hero-cta" },
          createElement("p", { class: "cta"},
            "Découvrez les lieux des JO de Paris 2024",
          ),
          createElement("a", { class: "cta-button", href: "/lieux" },
            "Liste des lieux",
          ),
        ),
        createElement("div", { class: "warning" },
        createElement("h2", { },
          "Information importante :",
        ),
        createElement("p", { },
          "PARIS 2024 et son prestataire officiel d'hospitalité, la société On Location, ont récemment été informés que plusieurs personnes et/ou sociétés se font passer pour des représentants autorisés de PARIS 2024 et/ou d'On Location pour encaisser frauduleusement des paiements en contrepartie de prestations labellisées Paris 2024 (par exemple, la location de stands de vente sur les sites olympiques) auprès de restaurants et d'entreprises de restauration en France. PARIS 2024 et On Location vous recommandent la plus grande vigilance.Si vous avez le moindre doute, nous vous invitons à contacter l'équipe de PARIS 2024 via integrityandenforcement@paris2024.org et On Location via alertfraud@onlocationexp.com. PARIS 2024 et On Location ont déposé des plaintes pénales auprès des autorités compétentes et des enquêtes sont actuellement en cours.",
        ),
        ),
        createElement("div", { class: "hero-about" },
        createElement("div",{class:"FAQ-2"},
        createElement("div",{class:"faq-titre"},"Bienvenue sur Paris 2024 !"),
        createElement("div",{class:"faq-info"},"Découvrez l'esprit olympique au cœur de la Ville Lumière. Bienvenue sur notre page dédiée aux Jeux Olympiques de Paris 2024. Cet événement emblématique promet de rassembler le monde entier dans une célébration de l'athlétisme, de l'inclusion et de la passion pour le sport. Découvrez tout ce que vous devez savoir sur les Jeux Olympiques de Paris, y compris les dates clés, les sites emblématiques et les expériences uniques qui vous attendent."),
      

      ),
      createElement("div",{class:"FAQ"},
        createElement("div",{class:"faq-titre"},"Les Dates à Retenir"),
        createElement("div",{class:"faq-info"},"Les Jeux Olympiques de Paris 2024 auront lieu du vendredi 26 juillet au dimanche 11 août. Pendant ces jours palpitants, la ville vibrera au rythme de la compétition, de la camaraderie et de l'excellence sportive."),
      
      ),
      createElement("div",{class:"FAQ-2"},
      createElement("div",{class:"faq-titre"},"Les Sites Olympiques"),
      createElement("div",{class:"faq-info"},"Paris 2024 réunira les meilleurs athlètes du monde dans des sites emblématiques. Explorez les lieux mythiques qui accueilleront les compétitions et découvrez l'héritage olympique qu'ils laisseront à la ville."),
    
    ),
    createElement("div",{class:"FAQ"},
      createElement("div",{class:"faq-titre"},"La Culture Olympique"),
      createElement("div",{class:"faq-info"},"Plongez-vous dans l'esprit olympique en explorant la riche histoire et les valeurs qui animent les Jeux Olympiques. Découvrez comment Paris 2024 célèbre la diversité, l'égalité et l'inclusion à travers des programmes culturels et éducatifs passionnants."),
    
    ),
      )),
    );
  }
}

export default HomePage;