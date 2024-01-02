import { Component } from "../core/MiniReact.js";
import { BrowserLink } from "../components/BrowserRouter.js";


class Header extends Component {
  static propTypes = {
    title: 'string',
    to: 'string'
  };

  render() {
    return {
      type: "header",
      props: {},
      children: [
        BrowserLink({
        
          to: "/",
          children: [
            {
              type: 'img',
              props: {
                id: "logo",
                src: "https://upload.wikimedia.org/wikipedia/fr/6/68/Logo_JO_d%27%C3%A9t%C3%A9_-_Paris_2024.svg", //temporaire mdrr
                alt: 'Logo',
              },
            },
          ],
        }),
        BrowserLink({ 
          title: "Accueil", 
          to: "/",
          icon: "home",
        }),
        BrowserLink({ 
          title: "Carte", 
          to: "/carte" ,
          icon: "map",
        }),
        BrowserLink({ 
          title: "Spots", 
          to: "/spots",
          icon: "place",
        }),
        BrowserLink({ 
          title: "Listing", 
          to: "/events" ,
          icon: "calendar_today",

        }),
      ],
    };
  }
}


export default Header;