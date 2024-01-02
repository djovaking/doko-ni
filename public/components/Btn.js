import { Component, createElement } from "../core/MiniReact.js";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return createElement('button', { onClick: this.handleClick }, `Click me! Count: ${this.state.count}`);
  }
}

export default Btn;