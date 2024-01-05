import { Component, createElement } from "../core/MiniReact.js";
import toolBar from "./ToolBar.js";

class Main extends Component {
    constructor(props, ...children) {
        super(props);
        this.children = children;
    }

    render() {
        return createElement('main', {class: "main"},
            createElement(toolBar, {}),
            ...this.children
        );
    }
    }

export default Main;