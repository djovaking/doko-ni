import { Component, createElement } from "../core/MiniReact.js";

class FAQ extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return createElement('div', { class: 'faq' },
            createElement('h2', {}, 'question'),
            createElement('p', {}, 'answer'),
        );
    }
    }

export default FAQ;