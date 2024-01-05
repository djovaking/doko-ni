import { Component, createElement } from "../core/MiniReact.js";

class TimerClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.calculateTimeLeft()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    calculateTimeLeft() {
        const now = new Date();
        const parisOlympics = new Date("July 26, 2024 00:00:00");
        const difference = parisOlympics - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    tick() {
        this.setState({
            time: this.calculateTimeLeft()
        });
    }

    render() {
        return createElement('div', { class: "timer-clock" }, 
        createElement('div', { class: "timer-clock__item" },
            createElement('span', { },
            `${this.state.time.days}`
            ),
            "Jours"
        ),
            createElement('div', { class: "timer-clock__item" },
            createElement('span', { },
            `${this.state.time.hours}`
            ),
            "Heures"
        ),
            createElement('div', { class: "timer-clock__item" },
            createElement('span', { },
            `${this.state.time.minutes}`
            ),
            "Minutes"
        ),
            createElement('div', { class: "timer-clock__item" },
            createElement('span', { },
            `${this.state.time.seconds}`
            ),
            "Secondes"
        ),
        
           );
    }
}

export default TimerClock;