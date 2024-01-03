import { Component, createElement } from "../core/MiniReact.js";
import ScreenSection from "../components/Section.js";
import Header from "../components/Header.js";
import Counter from "../components/Counter.js";

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
          {},
          createElement(Counter, {}, "Counter 1"),
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