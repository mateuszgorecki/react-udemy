const Item = (props) => <li>{`owoc ${props.content}`}</li>;

class ListItems extends React.Component {
  state = {
    items: ["japko", "śliwka", "gruszka"],
  };

  render() {
    const Items = this.state.items.map((item) => (
      <Item content={item} key={item} />
    ));
    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
