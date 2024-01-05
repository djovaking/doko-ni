// MiniReactDom.js
import BrowserRouter from "../components/BrowserRouter.js";
import routes from "../routes.js";
import { Component } from './MiniReact.js';

const MiniReactDom = {
  rootElement: null,

  render: function (rootElement) {
    this.rootElement = rootElement;
    BrowserRouter.bind(this)(routes, rootElement);
  },
  
  update: async function (domNode, newVirtualDom, componentInstance) {
    const oldVirtualDom = componentInstance.oldVirtualDom;
    if (!this.isEqual(oldVirtualDom, newVirtualDom)) {
      const newDomNode = await this.renderStructure(newVirtualDom);
      const parentNode = domNode.parentNode;
      if (parentNode) {
        // Call componentWillUnmount avant de supprimer le noeud du dom
        if (componentInstance && typeof componentInstance.componentWillUnmount === 'function') {
          await componentInstance.componentWillUnmount();
        }
        
        parentNode.replaceChild(newDomNode, domNode);

        if (componentInstance) {
          componentInstance.domNode = newDomNode;
          componentInstance.oldVirtualDom = newVirtualDom;
        
          // Call componentDidMount apres ajout au dom
          if (typeof componentInstance.componentDidMount === 'function') {
            await componentInstance.componentDidMount();
          }
        }
      }
    }
  },

isEqual: function (vdom1, vdom2) {
  if (typeof vdom1 !== typeof vdom2) {
    return false;
  }

  if (typeof vdom1 === 'string' || typeof vdom1 === 'number') {
    return vdom1 === vdom2;
  }

  if (vdom1.type !== vdom2.type) {
    return false;
  }

  if (!this.isEqualProps(vdom1.props, vdom2.props)) {
    return false;
  }

  if (vdom1.children.length !== vdom2.children.length) {
    return false;
  }

  for (let i = 0; i < vdom1.children.length; i++) {
    if (!this.isEqual(vdom1.children[i], vdom2.children[i])) {
      return false;
    }
  }

  return true;
},
isEqualProps: function (props1, props2) {
  const keys1 = Object.keys(props1);
  const keys2 = Object.keys(props2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (props1[key] !== props2[key]) {
      return false;
    }
  }

  return true;
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
        component.domNode = this.renderStructure(component.render());

        if (typeof component.componentDidMount === 'function') {
          component.componentDidMount();
        }
        
        return component.domNode;
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
            if (childElement instanceof Component) {
              childElement.domNode = childElement;
            }
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