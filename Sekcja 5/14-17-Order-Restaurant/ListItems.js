const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      changeStatus={props.changeStatus}
    />
  ));

  return (
    <div className="list">
      <h2>Twoje zamówienie</h2>
      <ul>{items}</ul>
    </div>
  );
};
