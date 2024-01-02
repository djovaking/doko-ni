import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class About extends Component {

  render() {
    return createElement(
      "div",
      {},
      createElement(Header),
      createElement("h1", {}, "About"),
      createElement(Footer)
    );
  }
}

export default About;