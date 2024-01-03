import { Component, createElement } from "../core/MiniReact.js";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.calculateTimeRemaining()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timeRemaining: this.calculateTimeRemaining()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateTimeRemaining() {
    const olympicsDate = new Date('2028-07-21T00:00:00Z').getTime(); // Date des prochains Jeux olympiques
    const now = new Date().getTime();
    const distance = olympicsDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds
      };
    } else {
      clearInterval(this.interval);
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state.timeRemaining;

    return createElement('div', { class: "countdown" },
      createElement('h4', {}, `${days} Jours`),
      createElement('h4', {}, `: ${hours} Heures`),
      createElement('h4', {}, `: ${minutes} Minutes`),
      createElement('h4', {}, `: ${seconds} Secondes`)
    );
  }
}

export default Countdown;
