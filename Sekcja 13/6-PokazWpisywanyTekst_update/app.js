const App = () => {
  const [value, setValue] = React.useState("");

  const handleOnChange = (e) => setValue(e.target.value.toUpperCase());

  const handleOnClick = () => setValue("");
  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="put text here"
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick}>Reset</button>
      <h1 className="title">{value}</h1>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
