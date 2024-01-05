import { Component, createElement } from "../core/MiniReact.js";
import ThemeSwitcherButton from "./ThemeSwitcher.js";
import Flag from "./Flag.js";
import MaterialIcon from "./MaterialIcon.js";


class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = { lang: "default" };
    }

    share = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'WebShare API Demo',
                    url: 'https://example.com'
                });
               
            } catch (error) {
                //console.error('Error sharing:', error);
            }
        } else {
           
        }
    }

    render() {
        return createElement('div', {class: "toolbar"},
            createElement("div", {class:"language-selector"},
                createElement(Flag, { lang: this.state.lang }),
                createElement("div",{class:"current-language"}, this.state.lang=== "default" ? "fr" : this.state.lang),
                createElement("div",{class:"language-list"},
                    createElement("div",{class:"language-item", onClick: () => this.setState({ lang: "fr" })},
                        "fr",
                        createElement(Flag, { lang: "fr" })
                    ),
                    createElement("div",{class:"language-item", onClick: () => this.setState({ lang: "en" })},
                        "en",
                        createElement(Flag, { lang: "en" })
                    ),
                    createElement("div",{class:"language-item", onClick: () => this.setState({ lang: "jp" })},
                        "jp",
                        createElement(Flag, { lang: "jp" })
                    ),
                )
            ),
            createElement(ThemeSwitcherButton, {}),
            createElement("button", {onClick: this.share ,class:"share"}, createElement(MaterialIcon, { icon: "share" }))
        );
    }
}

export default ToolBar;