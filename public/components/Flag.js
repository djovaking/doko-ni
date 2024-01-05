import { Component, createElement } from "../core/MiniReact.js";

class Flag extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {

        const frenchFlag = createElement(
            "svg",
            {xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 640 480", width:"640", height:"480"},
            createElement("path", { fill:"#fff", d: "M0 0h640v480H0z"}),
            createElement("path", { fill:"#00267f", d: "M0 0h213.3v480H0z"}),
            createElement("path", { fill:"#f31830", d: "M426.7 0H640v480H426.7z"})
        );
          
        const englishFlag = createElement(
            "svg",
            {xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 640 480", width:"640", height:"480"},
            createElement("path", { fill:"#012169", d: "M0 0h640v480H0z"}),
            createElement("path", { fill:"#FFF", d: "m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"}),
            createElement("path", { fill:"#C8102E", d: "m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"}),
            createElement("path", { fill:"#FFF", d: "M241 0v480h160V0zM0 160v160h640V160z"}),
            createElement("path", { fill:"#C8102E", d: "M0 193v96h640v-96zM273 0v480h96V0z"})
        );

        const japaneseFlag = createElement(
            "svg",
            {xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 640 480", width:"640", height:"480"},
            createElement("path", { fill:"#fff", d: "M-128 32h720v480h-720z"}),
            createElement("circle", { cx:"523.1", cy:"344.1", r:"194.9", fill:"#bc002d", transform:"translate(-168.4 8.6)scale(.76554)"})
        );

        let flag;
        switch(this.props.lang) {
            case "fr":
                flag = createElement("img", {class:"flag",src:"https://flagicons.lipis.dev/flags/4x3/fr.svg"});
                break;
            case "en":
                flag = createElement("img", {class:"flag",src:"https://flagicons.lipis.dev/flags/4x3/gb.svg"});
                break;
            case "jp":
                flag = createElement("img", {class:"flag",src:"https://flagicons.lipis.dev/flags/4x3/jp.svg"});
                break;
            case "default":
                flag = createElement("img", {class:"flag",src:"https://flagicons.lipis.dev/flags/4x3/fr.svg"});
                break;
        }
        return flag;
    }
}
export default Flag;