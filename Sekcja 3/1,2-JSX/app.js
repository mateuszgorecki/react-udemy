// console.log(React);
// console.log(ReactDOM);

class App extends React.Component {
  state = {
    counter: 0
   }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
     );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
const element = <div id="" key="" >pierwszy element react</div>

const element2 = React.createElement(
  "div",
  null,
  "drugi element react"
)
/* zamiast React.Fragment można zapisać puste tagi */
const elementy5 = (
  <React.Fragment>
<section>
  <p>siemano</p>
</section>
<section></section>
  </React.Fragment>

)