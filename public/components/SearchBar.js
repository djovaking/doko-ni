import { Component, createElement } from "../core/MiniReact.js";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
    }

    handleInputChange = (event) => {
        this.setState({ query: event.target.value });
        console.log(event.target.value);
    
        const targetId = this.props.targetId;
        if (targetId) {
            let table = document.getElementById(targetId);
            if (table) {
                let rows = table.getElementsByTagName('tr');
                // Start from the first index to skip the header row
                for (let i = 1; i < rows.length; i++) {
                    let cols = rows[i].getElementsByTagName('td');
                    let rowContainsQuery = Array.from(cols).some(col => col.textContent.toLowerCase().includes(this.state.query.toLowerCase()));
                    if (!rowContainsQuery) {
                        rows[i].classList.add('hidden');
                    } else {
                        rows[i].classList.remove('hidden');
                    }
                }
            }
        }
    }
    
    render() {
        return createElement('div', {class: "search-bar"},
            createElement('input', {
                type: "text", 
                placeholder: "Rechercher un sport ou un lieu",
                onInput: this.handleInputChange
            }),
            createElement('button', {}, "Rechercher"),
            createElement('p', {}, this.props.targetId ? "Tableau ciblé: " + this.props.targetId : "Aucun tableau ciblé)"),
        );
    }
}

export default SearchBar;