//import  Homepage from "../pages/Homepage.js";

const BrowserRouter = function (routes, rootElement) {
  const generatePage = () => {
    const path = location.pathname;
    const Component = routes[path] ?? routes["*"];

    const componentInstance = new Component();
    const virtualNode = componentInstance.render();

    const element = this.renderStructure(virtualNode);


    if (rootElement.childNodes.length) {
      rootElement.replaceChild(element, rootElement.childNodes[0]);
    } else rootElement.appendChild(element);
  };
  generatePage();
  const oldPushState = history.pushState;
  history.pushState = function (state, title, url) {
    oldPushState.call(history, state, title, url);
    window.dispatchEvent(new Event("popstate"));
  };
  window.onpopstate = generatePage;
};

export const BrowserLink = function (props) {
  let children = props.children || [
    {
      type: "TEXT_NODE",
      content: props.title,
    },
  ];

  if (props.icon) {
    children.unshift({
      type: "span",
      props: {
        class: "material-symbols-rounded",
      },
      children: [
        {
          type: "TEXT_NODE",
          content: props.icon,
        },
      ],
    });
  }

  return {
    type: "a",
    props: {
      href: props.to,
    },
    events: {
      click: [
        function (event) {
          event.preventDefault();
          history.pushState(null, null, props.to);
        },
      ],
    },
    children: children,
  };
};

export default BrowserRouter;