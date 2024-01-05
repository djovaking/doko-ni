import { Component, createElement } from "../core/MiniReact.js";
import data from "../data/data.js";

class mapCanvas extends Component {
  render() {
    return createElement('canvas', { id: 'mapCanvas', width: 800, height: 600 });
  }

  componentDidUpdate() {
    this.drawMap();
  }

  drawMap() {
    const canvas = document.getElementById('mapCanvas');
    const ctx = canvas.getContext('2d');

    data.forEach(item => {
      const x = item.geo_point.lon;
      const y = item.geo_point.lat;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.stroke();
    });
  }
}

export default mapCanvas;