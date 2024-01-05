import { Component, createElement } from "../core/MiniReact.js";
import MaterialIcon from "./MaterialIcon.js";

class ThemeSwitcherButton extends Component {
    constructor(props) {
        super(props);
        this.state = { theme: 'light' };
    }

    toggleTheme = () => {
        const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({ theme: newTheme });
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    render() {
        return createElement('button', { onClick: this.toggleTheme, class:"theme-switch"}, createElement(MaterialIcon, { icon:this.state.theme === 'dark' ?  'light_mode' :  'dark_mode' }));
    }
}
export default ThemeSwitcherButton;