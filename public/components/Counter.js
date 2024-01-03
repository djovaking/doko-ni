import { Component, createElement } from "../core/MiniReact.js";

class Counter extends Component {
    constructor(props, ...children) {
      super(props);
      this.children = children;
      this.state = { count:  6}; // Initialize state with count
      console.log("valeur du counter : ",this.state.count);
    }
  
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    }
  
    decrement = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    }
  
    render() {
      return createElement(
        'section',
        {
          onClick: this.increment, // Increment count on click
          onRightClick: this.decrement, // Decrement count on right click
          onDoubleClick: this.reset // Reset count on double click
        },
        `Count: ${this.state.count}`, // Display count
        ...this.children
      );
    }
  }
  

export default Counter;