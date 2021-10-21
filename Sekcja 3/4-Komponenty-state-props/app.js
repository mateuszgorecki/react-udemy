  //obiekty state i props

  class ShoppingList extends React.Component{

    state = {
      items1: 'ogórki',
      items2: 'sok',
      items3: 'cos do picia'
    }

      render(){
        return(
          <div>
      <h1>Lista zakupów</h1>
        <ul>
    <ItemList name={this.state.items1} example={2+2}/>
    <ItemList name={this.state.items2}/>
    <ItemList name={this.state.items3}/>
        </ul>
      </div>
        )
      }
    }

    //*w komponencie funkcyjnym trzeba przekazywać propsy ale nie trzeba ich wywoływać z this

    // const ItemList = (props) => {
    //   return(
    //     <li>{props.name} - {props.example}</li>
    //   )
    // }

    //* w komponencie klasowym nie trzeba przekazywać propsów (bo to jest robione z defaultu) ale za to trzeba je wywoływać z "this"

    class ItemList extends React.Component {
      render() {
        return (
          <li>{this.props.name} - {this.props.example}</li>
         );
      }
    }


    ReactDOM.render(<ShoppingList/>, document.getElementById('root'))