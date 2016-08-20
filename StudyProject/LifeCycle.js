import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0}
  }
  update(e){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  componentDidMount(){
    console.log('mounted')
  }
  render(){
    return(
      <InnerComponent update={this.update}
      {...this.state}
      {...this.props}
      />
    )
  }
}

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>
const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
  render(){
    return (
      <div>
        <ButtonMixed txt="Button" />
        <LabelMixed txt="Button" />
      </div>
    )
  }

}

//import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor(){
//     super();
//     this.update = this.update.bind(this)
//     this.state = {increasing : false}
//   }
//   update(e){
//     ReactDOM.render(
//       <App val={this.props.val+1} />,
//       document.getElementById('app')
//     );
//   }
//   componentWillReceiveProps(nextProps){
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   shouldComponentUpdate(nextProps, nextState){
//     return nextProps.val % 5 === 0;
//   }
//   componentDidUpdate(prevProps, prevState){
//     console.log('prevProps', prevProps)
//   }
//   render(){
//     console.log(this.state.increasing)
//     return(
//       <button onClick={this.update}>{this.props.val}</button>
//     )
//   }
// }
// App.defaultProps = { val: 0}

export default App
