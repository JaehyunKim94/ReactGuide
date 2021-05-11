import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // 컴포넌트가 마운트 될 때 실행
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // 컴포넌트가 언마운트 될 때 실행
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() }); // 로컬 state 업데이트
  }

  render() {
    return (
      <div>
        <h1>05_StateAndLifecycle</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
