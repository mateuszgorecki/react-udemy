// const showMessage = (confirmed, submitted) => {
//   debugger;
//   if (submitted) {
//     if (confirmed) return <ValidationMsg txt="Można" />;
//     else return <ValidationMsg txt="Nie można" />;
//   } else return null;
// };

//? Operator warunkowy nie działa po przypisaniu do funkcji nie ważne czy jest poza klasą czy w środku. Działa wywołany bezpośrednio
// const showMessage2 = (confirmed, submitted) => {
//   submitted ? (
//     confirmed ? (
//       <ValidationMsg txt="Można" />
//     ) : (
//       <ValidationMsg txt="Nie można" />
//     )
//   ) : null;
// };

const ValidationMsg = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

class TicketShop extends React.Component {
  state = {
    confirmed: false,
    submitted: false,
  };

  isConfirmed = () => {
    this.setState({
      confirmed: !this.state.confirmed,
      submitted: false,
    });
  };

  isChecked = (e) => {
    e.preventDefault(); //powstrzymaj działania domyślne
    if (!this.state.submitted) {
      this.setState({
        submitted: true,
      });
    }
  };

  // showMessage2 = (confirmed, submitted) => {
  //   submitted ? (
  //     confirmed ? (
  //       <ValidationMsg txt="Można" />
  //     ) : (
  //       <ValidationMsg txt="Nie można" />
  //     )
  //   ) : null;
  // };

  render() {
    const { confirmed, submitted } = this.state;
    return (
      <>
        <h1>Kup bilet na horror roku</h1>
        <form onSubmit={this.isChecked}>
          <input
            type="checkbox"
            id="age"
            onChange={this.isConfirmed}
            checked={confirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {showMessage(confirmed, submitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
