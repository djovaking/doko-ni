import { Component, createElement } from "../core/MiniReact.js";

class Section extends Component {
  constructor(props, ...children) {
    super(props);
    this.children = children;
  }

  render() {
    return createElement(
      "section",
      { class: "screen-section" },
      ...this.children
    );
  }
}

export default Section;