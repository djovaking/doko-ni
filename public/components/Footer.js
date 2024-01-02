import { Component } from "../core/MiniReact.js";

class Footer extends Component {
  render() {
    return {
      type: "footer",
      children: [
        {
          type: "TEXT_NODE",
          content: "footer",
        },
      ],
    };
  }
}

export default Footer;
