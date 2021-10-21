    //przycisk - po kliknięciu dodawana jest litera do tekstu
//Funkcja strzałkowa a deklarowanie metody. Bind
//setState - przekazanie do metody obiektu i funkcji
//definiowanie state w konstruktorze

//*3 część
//nowy komponent wyświetlenie cyfr
//losowanie liczby
//Wyświetlanie nazwy przycisku z obiektu props, ze zmiennej bezpośrednio lub z obiektu state

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: ''
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }
  state = {
    text: ''
  }

  handleClick = () =>{
    //można zrobić inną deklarację funkcji (ze słowem function albo deklarować jako handleClick(){})
    //ale wtedy do wywołania metody na buttonie trzeba dopisać '.bind(this)'
    //przy deklaracji w postaci funkcji strzałkowej i wtedy przy wywołaniu nie trzeba bindować 'this'

    // const letter = 'a';
    // this.setState({
      //   text: this.state.text + letter
      // })
     const number = Math.floor(Math.random()*10)
      this.setState(()=>({
          text: this.state.text + number
        })
      )
    }
    render() {
      return (
        <div>
         <button onClick={this.handleClick/*.bind(this)*/} >{this.props.btnTitle} {this.state.text ? [...this.state.text].pop() : "jeszcze nic ;)"}</button>
       <PanelResult text={this.state.text}/>
        </div>
       );
      }
  }
  const PanelResult = (props) => {
    return(
      <h1>{props.text}</h1>
    )
  }

  ReactDOM.render(<App btnTitle='dodaj cyfrę' />, document.getElementById('root'))