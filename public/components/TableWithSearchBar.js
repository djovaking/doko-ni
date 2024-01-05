import { Component, createElement } from "../core/MiniReact.js";
import MaterialIcon from "./MaterialIcon.js";

class TableWithSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ filter: event.target.value });
  }

  

  componentDidUpdate() {
    const searchInput = document.getElementById('search');
    searchInput.focus();
    const valueLength = searchInput.value.length;
    searchInput.setSelectionRange(valueLength, valueLength);
  }

  render() {
    const { data } = this.props;
  
    const createElementsWithBreaks = (items) => {
      const elements = [];
      items.forEach((item, index) => {
        elements.push(createElement('span', {}, item.toString()));
        if (index < items.length - 1) {
          elements.push(createElement('br', {}));
        }
      });
      return elements;
    };
  
    const rows = data.filter(item => 
      Object.values(item).some(value => 
        value && value.toString().toLowerCase().includes(this.state.filter.toLowerCase())
      )
    ).map(item => {
      const sportsElements = createElementsWithBreaks(item.sports || ["aucun"]);
      const sitesElements = createElementsWithBreaks(item.sites_olympiques_paralympiques || ["aucun"]);
      const geoPointsElements = createElementsWithBreaks([item.geo_point.lat, item.geo_point.lon]);
  
      return createElement('tr', {}, 
        createElement('td', {}, item.nom),
        createElement('td', {}, ...sportsElements),
        createElement('td', {}, ...sitesElements),
        createElement('td', {}, ...geoPointsElements),
      );
    });
  
    return createElement('div', {},
      
     createElement("div",{class:"search-bar"},
     createElement('input', {
      id: 'search',
      type: 'text',
      value: this.state.filter,
      oninput: this.handleInputChange,
      placeholder: 'Filtrer...',
    },
   
    ),
    createElement(MaterialIcon, { icon: 'search' }),),
      createElement('table', {class: 'table-with-search-bar'},
        createElement('thead', {},
          createElement('tr', {},
            createElement('th', {}, "Nom"),
            createElement('th', {}, "Sports"),
            createElement('th', {}, "Type de site"),
            createElement('th', {}, "GeoPoint"),
          )
        ),
        createElement('tbody', {}, ...rows)
      )
    );
  }
}

export default TableWithSearchBar;