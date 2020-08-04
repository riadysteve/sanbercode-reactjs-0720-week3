import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100,
      clock: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
    setInterval(() => this.counting(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  counting() {
    this.setState({
      clock: new Date().toLocaleTimeString(),
    });
  }

  tick() {
    if (this.state.time !== 0) {
      this.setState({
        time: this.state.time - 1,
      });
    }
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <b>sekarang jam : {this.state.clock}</b>
        <b>
          {this.state.time === 0 ? "" : `hitung mundur : ${this.state.time}`}
        </b>
      </div>
    );
  }
}

export default Timer;
