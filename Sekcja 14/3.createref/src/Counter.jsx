import React, { createRef, PureComponent } from "react";

class Counter extends PureComponent {
  state = {
    counter: 0,
  };

  componentRef = createRef();

  render() {
    const { counter } = this.state;
    return (
      <div ref={this.componentRef}>
        <p>Wartość licznika wynosi: {counter}</p>
        <button onClick={this.asyncIncreaseCounterValue}>
          Dwnld async data
        </button>
      </div>
    );
  }

  asyncIncreaseCounterValue = () =>
    setTimeout(() => {
      if (this.componentRef.current) {
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
      }
    }, 2000);
}

export default Counter;
