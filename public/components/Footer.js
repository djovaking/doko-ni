import { Component } from "../core/MiniReact.js";

class Footer extends Component {
  render() {
    return {
      type: "footer",
      children: [
        {
          type: "TEXT_NODE",
          content: "© Projet JO 2024 - ESGI (Sébastien HAREL - Rashmi BHAVSAR - Yannick LEMA)",
        },
      ],
    };
  }
}

export default Footer;
