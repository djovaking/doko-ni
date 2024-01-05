import { Component, createElement } from "../core/MiniReact.js";

class MaterialIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return createElement('span', { class: "material-symbols-rounded" }, this.props.icon);
    }
}
export default MaterialIcon;

