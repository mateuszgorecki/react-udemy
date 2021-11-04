const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>Prezentacja stanu w React</h1>
      <p>Wartość stanu: {counter}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
