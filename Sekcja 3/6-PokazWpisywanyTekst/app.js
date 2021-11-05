//* Aplikacja tekst pojawiający się po wpisaniu w input
//Aplikacja ma pokazywać tekst wpisywany do inputa w jakimś zewnętrznym tagu
//Po kliknięciu w przycisk reset ma wyczyścić inputa i zawartość tagu

class App extends React.Component {
  state = {
    value: "",
  };

  handleInputChange = (e) => {
    console.log(`Zawartość w evencie ${e.target.value}`);
    console.log(`Zawartość value przed setState ${this.state.value}`);
    this.setState({
      value: e.target.value,
    });
    console.log(`Zawartość value po setState ${this.state.value}`);
    //metoda setState jest wywoływana dopiero przy renderowaniu strony a nie według kolejności zapisanego kodu.
    //Innymi słowy state jest updatetowany przy renderze strony.
  };
  resetButton = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    console.log(`Zawartość value w trakcie render ${this.state.value}`);
    return (
      <React.Fragment>
        {/*koniecznie musi być opcja value bo bez niej nie zadziała reset*/}
        <input
          value={this.state.value}
          placeholder="put text here"
          onChange={this.handleInputChange}
          type="text"
        />
        <button type="reset" onClick={this.resetButton}>
          Reset
        </button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
