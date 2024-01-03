import BrowserRouter from "../components/BrowserRouter.js";
import routes from "../routes.js";

const MiniReactDom = {
  rootElement: null,

  render: function (rootElement) {
    this.rootElement = rootElement;
    BrowserRouter.bind(this)(routes, rootElement);
  },
  
  update: function (rootElement) {
    console.log('update');
   this.render(this.rootElement)
  },
  renderStructure: function generateDom(structure) {
    try {
      let element;
      
      if (typeof structure.type === "string") {
       
        if (structure.type === "TEXT_NODE") {
          return document.createTextNode(structure.content);
        }
        element = document.createElement(structure.type);
      } else if (typeof structure.type === "function") {
        const component = new structure.type(structure.props, ...structure.children);
        return this.renderStructure(component.render());
      }

      if (structure.props) {
        for (const propName in structure.props) {
          if (propName === "style") {
            Object.assign(element.style, structure.props[propName]);
          } else if (propName.startsWith("data-")) {
            element.dataset[propName.replace("data-", "")] =
              structure.props[propName];
          } else {
            element.setAttribute(propName, structure.props[propName]);
          }
        }
      }

      if (structure.events) {
        for (const eventName in structure.events) {
          for (const eventListeners of structure.events[eventName]) {
            element.addEventListener(eventName, eventListeners);
          }
        }
      }

      if (structure.children) {
        for (const child of structure.children) {
          let childElement;
          if (typeof child === 'string') {
            childElement = document.createTextNode(child);
          } else {
            childElement = this.renderStructure(child);
          }
          element.appendChild(childElement);
        }
      }

      return element;
    } catch (error) {
      console.error('An error occurred while rendering the structure:', error);
    }
  },
};

export default MiniReactDom;