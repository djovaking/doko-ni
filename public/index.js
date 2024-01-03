import MiniReactDom from "./core/MiniReactDom.js";
import routes from "./routes.js";
import Store from "./core/store.js"; // Import your Store

// Set the initial state before rendering
const initialState = {
  // Your initial state properties go here
};

Store.setInitialState(initialState);

// Render your components
MiniReactDom.render(document.getElementById("root"), routes);
