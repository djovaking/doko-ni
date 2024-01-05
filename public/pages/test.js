import { Component, createElement } from "../core/MiniReact.js";
import mapCanvas from "../components/mapCanvas.js";

class TestPage extends Component {
  render() {
    return createElement('div', {},
      createElement(mapCanvas, {})
    );
  }
}