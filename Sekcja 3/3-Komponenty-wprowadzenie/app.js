//Komponenty

// komponent funkcyjny, bezstanowy

const Header = () => {
  return <h1>Witaj na stronie</h1>
  }


  //komponent klasowy, stanowy

  class Blog extends React.Component{
    render(){
      return(
        <section>
          <h2>Artykuł 4</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure autem eius veritatis temporibus. Culpa, quis animi perspiciatis esse quam ad saepe commodi officia et at fugiat eligendi. Error, dolor rerum.</p>
        </section>
      )
    }
  }

  const App = () => {
    return(
  <>
    <Header/>
    <Blog/>
    </>
    )
  }

  ReactDOM.render(<App/>, document.getElementById('root'))