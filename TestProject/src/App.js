import React from 'react';
import Site from './vendor/Site';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import UserList from './pages/UserList';
import UserTasks from './pages/UserTasks';

function narcissistic( value ) {
  var array = value + '';
  var summ = 0;
  for(var i=0;i<array.length;i++){
    summ += Math.pow(array[i], array.length)
  }
  return summ === value;
}
//console.log(narcissistic(32443))

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Site}>
      <IndexRoute component={UserList}/>
      <Route path="userTasks/:userId" component={UserTasks} />
    </Route>
  </Router>
)

export default App

// class Parent{
//   age = 26;
//   constructor(name){
//     this.name = name;
//   }
//   printMe() {
//     const obj = {
//       age: this.age,
//       name: this.name,
//     }
//     const { name, age } = obj;
//     for (let i=0; i<2; i++) {
//       setTimeout(function() {
//         console.log(`Hi, I'm ${name} and
//         I'm ${age}. It's ${i}`)
//       }, 2000);
//     }
//   }
// }
// const parent = new Parent("Alisa");
// parent.printMe();
