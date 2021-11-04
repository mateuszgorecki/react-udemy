const App = () => {
  const [text, setText] = React.useState("");

  // const handleOnClick = () => {
  //   const letter = "a";
  //   setText(text + "a");
  // };
  const handleOnClick = () => setText(`${text}a`);

  return (
    <>
      <button onClick={handleOnClick}>Dodaj "A"</button>
      <h1>{text}</h1>
    </>
  );
};

ReactDOM.render(
  <App btnTitle="dodaj cyfrę" />,
  document.getElementById("root")
);
