const Switch = (props) => (
  <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
);

class App extends React.Component {
  state = {
    active: true,
  };
  changeTitle = () => {
    this.setState({ active: !this.state.active });
  };
  render() {
    const { active } = this.state;
    return (
      <div>
        <Switch active={active} click={this.changeTitle} />
        {active && <Clock />}
      </div>
    );
  }
}

class Clock extends React.Component {
  state = {
    time: this.getTime(),
  };

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }

  setTime() {
    const time = this.getTime();
    this.setState({ time });
  }
  componentDidMount() {
    this.interval = setInterval(this.setTime.bind(this), 1000);
    console.log("zamontowany");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("usuniety");
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <div>
        {hours < 10 ? `0${hours}` : hours} :{" "}
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
