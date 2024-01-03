import { Component, createElement } from "../core/MiniReact.js";
import SearchBar from "./SearchBar.js";

class ToolBar extends Component {


    render() {
        const targetId = this.props.targetId;

        return createElement('div', {class: "toolbar"},
        createElement(SearchBar, {targetId: targetId}),
        createElement('button', {class: "btn"}, "test"),
        );
    }
}

export default ToolBar;
