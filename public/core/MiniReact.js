// MiniReact.js
import MiniReactDom from './MiniReactDom.js';

export function createElement(type, props = {}, ...children) {
  const element = {
    type,
    props: { ...props },
    children: [...children],
    events: {}
  };

  // Attach event handlers
  for (let prop in props) {
    if (prop.startsWith('on') /*&& typeof props[prop] === 'function'*/) {
      const eventType = prop.toLowerCase().substring(2);
      element.events[eventType] = [props[prop]];
    }
  }

  return element;
}

export class Component {
  constructor(props = {}, initialState = {}) {
    this.props = props;
    this.children = [];
    this.previousState = {};
    this.domNode = null; 
    this.state = { ...initialState }; 
  }

  componentDidMount() {
    // called apres ajout au dom
  }

  componentWillUnmount() {
    // call avant delete du dom
  }

  componentDidUpdate() {
  }


  componentShouldUpdate() {
    return true;
  }

  setState(newState) { 
    const prevProps = { ...this.props };
    const prevState = { ...this.state };
    this.previousState = { ...this.state };
    this.state = { ...newState };
    //console.log('update state');
    this.updateComponent();
    
  }

  updateComponent() {

    if (this.domNode) {
      const newVirtualDom = this.render();
      MiniReactDom.update(this.domNode, newVirtualDom,this);
    }
    this.componentDidUpdate();
  }

  render() {}
}