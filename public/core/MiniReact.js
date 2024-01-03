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
    if (prop.startsWith('on') && typeof props[prop] === 'function') {
      const eventType = prop.toLowerCase().substring(2);
      element.events[eventType] = [props[prop]];
      delete element.props[prop];
    }
  }

  return element;
}
export class Component {
  constructor(props = {}) {
    this.props = props;
    this.children = [];
    this.state = this.state || {};

    //bjinder un node à un component pour l'update du code, pour re-render le code on refait un render sur le root node avec le nouvel virtual dom
    //genre this.node = node bla bla bla et dans le render on fait this.node = renderStructure(virtualDom)?
    // quand un state change on re-render le root avec le nouveau virtual dom

  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.updateComponent();
    console.log("new state: ", this.state);
  }
  
  updateComponent() {
   console.log("updateComponent medhod called");
   const newVirtualDom = this.render();
   MiniReactDom.update(newVirtualDom); 
   this.componentDidUpdate();
  }

  render() {

  }
}