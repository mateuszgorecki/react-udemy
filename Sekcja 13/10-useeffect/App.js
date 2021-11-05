const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [isActive, setIsActive] = React.useState(true);

  const handler = () => setCounter((prevState) => prevState + 1);
  const toggle = () => setIsActive(!isActive);

  const counterComponent = isActive ? (
    <Counter rerenderCounter={counter} />
  ) : null;

  // React.useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  return (
    <div>
      <button onClick={toggle}>Pokaż/ ukryj komponent</button>
      <button onClick={handler}>przerenderuj komponent</button>
      {counterComponent}
    </div>
  );
};

const Counter = ({ rerenderCounter }) => {
  const [counter, setCounter] = React.useState(0);

  const handleMouseMove = (e) => setCounter(e.clientX);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rerenderCounter]);

  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
