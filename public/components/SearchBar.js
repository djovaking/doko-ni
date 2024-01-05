import { Component, createElement } from "../core/MiniReact.js";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };

    }
    
    componentShouldUpdate(nextProps, nextState) {
        return false;
    }

    handleInputChange = (event) => {
        const query  = event.target.value;
        
        this.props.onInput(query);

    }

    render() { 
        return createElement('div', {class: "search-bar"},
            createElement('input', {
                type: "text", 
                placeholder: "Rechercher un sport ou un lieu",
                onInput: this.handleInputChange
            }),
        );
    }
}

export default SearchBar;