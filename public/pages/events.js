import { Component, createElement } from "../core/MiniReact.js";
import ScreenSection from "../components/Section.js";
import Header from "../components/Header.js";

class Events extends Component {
  render() {
    return createElement(
      "div",
      {},
      createElement(Header, { title: 'Home', to: '/home' }),
      createElement(
        "main",
        {},
        createElement(
          ScreenSection,
          {}
        ),
        createElement(
          ScreenSection,
          {}
        ),
      ),
      
    );
  }
}

export default Events;