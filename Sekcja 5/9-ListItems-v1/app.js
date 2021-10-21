class ListItems extends React.Component {
  state = {
    items: ["japko", "śliwka", "gruszka"],
  };

  render() {
    return (
      <>
        {this.state.items.map((item, id) => (
          <li key={item}>{`owoc ${item}`}</li>
        ))}
      </>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
