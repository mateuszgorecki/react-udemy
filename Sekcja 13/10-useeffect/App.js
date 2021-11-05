const App = () => {
  const [state, setState] = React.useState(0);

  const handler = () => setState((prevState) => prevState + 1);

  return (
    <div onClick={handler}>
      <p>{state}</p>
      <p>Licznik</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
