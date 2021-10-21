//* Aplikacja przycisk pokaż/ukryj

class Message extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      msgIsVisible: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
  }
  handleMessageButton(){
    this.setState((prevState)=>({
      msgIsVisible: prevState.msgIsVisible
    }))
  }

  render() {
    const text = 'Voluptate ea ipsum nulla culpa tempor est dolor proident laboris quis. Cupidatat mollit ut qui laboris fugiat non exercitation dolore occaecat anim esse amet non duis. Nostrud consectetur do tempor et nulla eiusmod laborum adipisicing. Ipsum consequat consequat nostrud ex adipisicing sint aute. Pariatur id nisi pariatur qui culpa nisi occaecat laborum reprehenderit quis amet elit laborum. Quis proident esse incididunt deserunt ullamco qui veniam ullamco id cupidatat aute cillum consequat. Enim ipsum sint occaecat adipisicing sunt ipsum dolore id laboris dolore laborum.'

     return (
      <>
        <button onClick={this.handleMessageButton}>
          {this.state.msgIsVisible? 'Ukryj' : 'Pokaż'}
        </button>
        {/* this.state.msgIsVisible ? <p>{text}</p> : null} */}
        {this.state.msgIsVisible && <p>{text}</p>}
      </>
     );
  }
}

ReactDOM.render(<Message  />, document.getElementById('root'))

//<p>{this.state.msgIsVisible && text }</p>