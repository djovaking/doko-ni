import { Component, createElement } from "../core/MiniReact.js";

class AutoCompleteList extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(item) {
        this.props.onSelect(item);
    }

    render() {
        const items = this.props.data.filter(item => item.startsWith(this.props.filter));
        return createElement('div', {class: 'autocomplete-list'},
            items.map(item => createElement('div', {onClick: () => this.handleItemClick(item)}, item))
        );
    }
}

export default AutoCompleteList;