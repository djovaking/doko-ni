import { Component, createElement } from "../core/MiniReact.js";
import Header from "../components/Header.js";
import Section from "../components/Section.js";
import Table from "../components/table.js";
import data from "../data/data.js";
import ToolBar from "../components/ToolBar.js";

class Spots extends Component {
  render() {
    return createElement('div', {},
      createElement(Header, { title: 'Spots', to: '/spots' }),
      createElement('main', {},
        createElement(Section, {},
          createElement(ToolBar, {class: "table-toolbar", targetId:"spots-table"},),
          createElement(Table, { 
            data: data,
            id: "spots-table",
          })
        ),
      )
    );
  }
}

export default Spots;