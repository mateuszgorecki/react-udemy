const ADD = "add";
const RESET = "reset";
const SUB = "sub";

const Counter = (props) => {
  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState(props.result);

  const handleMathClick = (type, number = 1) => {
    if (type === "sub") {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === "reset") {
      setCount(count + 1);
      setResult(props.result);
    } else if (type === "add") {
      setCount(count + 1);
      setResult(result + number);
    }
  };

  return (
    <>
      <MathButton name="-10" number={10} type={SUB} click={handleMathClick} />
      <MathButton name="-1" number={1} type={SUB} click={handleMathClick} />
      <MathButton name="-Reset" type={RESET} click={handleMathClick} />
      <MathButton name="+1" number={1} type={ADD} click={handleMathClick} />
      <MathButton name="+10" number={10} type={ADD} click={handleMathClick} />
      <ResultPanel count={count} result={result} />
    </>
  );
};
const MathButton = ({ click, name, number, type }) => {
  const handleOnClick = () => click(type, number);
  return <button onClick={() => click(type, number)}>{name}</button>;
};
const ResultPanel = ({ count, result }) => {
  const additionalInformation = count >= 10 ? <span>Przeciążenie</span> : count;
  return (
    <>
      <h2>
        Liczba kliknięć:
        {additionalInformation}
      </h2>
      <h3>Wynik: {result}</h3>
    </>
  );
};

const startValue = 0;

ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);
