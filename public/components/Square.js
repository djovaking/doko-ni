import { Component, createElement } from "../core/MiniReact.js";

class Square extends Component {
    constructor(props, ...children) {
      super(props);
      this.children = children;
    }
  
    render() {
      return createElement(
        'section',
        {
          style: {
            width: '100px',
            height: '100px',
            backgroundColor: 'green'
          }
        },
        ...this.children
      );
    }
  }

export default Square;