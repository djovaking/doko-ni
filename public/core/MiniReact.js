export function createElement(type, props = {}, ...children) {
  return {
    type,
    props,
    children: [...children],
  };
}
export class Component {
  constructor(props = {}) {
    this.props = props;
    this.children = [];
    this.state = this.state || {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    //aie
  }
}