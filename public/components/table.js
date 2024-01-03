import { Component, createElement } from "../core/MiniReact.js";

class Table extends Component {
    render() {
      const { data } = this.props;
      const tableId = this.props.id;
      console.log(data);
  
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
  
      const rows = data.map(item => {
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
  
      return createElement('table', {id: tableId ? tableId : ""},
        createElement('thead', {},
          createElement('tr', {}, 
            createElement('th', {}, "Nom"),
            createElement('th', {}, "Sports"),
            createElement('th', {}, "Type de site"),
            createElement('th', {}, "GeoPoint"),
          )
        ),
        createElement('tbody', {}, ...rows),
      );
    }
  }
  
  export default Table;