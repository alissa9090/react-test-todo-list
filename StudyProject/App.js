import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 128,
      green: 128,
      blue: 128
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  _toHex(s) {
    var hex = parseInt(s,10).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  render(){
    var rr = this._toHex(this.state.red),
        gg = this._toHex(this.state.green),
        bb = this._toHex(this.state.blue);
    var color = "#" + rr + gg + bb;

    var divStyle = {
      width:'130px',
      height:'20px',
      backgroundColor: color
      //background-color:rgb(this.state.red,this.state.green,this.state.blue)
    };
   return (
     <div>
       <div style={divStyle}></div>
       <br></br>
       <Slider ref="red" update={this.update} title="Red"/>
       <Slider ref="green" update={this.update} title="Green"/>
       <Slider ref="blue" update={this.update} title="Blue"/>
     </div>
   )
 }
}

class Slider extends React.Component {
  render(){
   return (
     <div>
       {this.props.title}
       <br></br>
       <input ref="inp" type="range"
       min="0"
       max="255"
       onChange={this.props.update}></input>
     </div>
   )
 }
}

// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text" onChange={props.update}></input>
//       <h1>{props.txt}</h1>
//     </div>
//   );
// }

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: 'Hello world!'
// }

export default App
