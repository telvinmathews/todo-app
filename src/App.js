import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        My hello world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

//Class component
//create a component (line 19)
//disply componet by including component in the root App componet on line 10. 
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
       First Component
      </div>
    );
  }
}

//Class component
class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
       Second Component
      </div>
    );
  }
}
//fuction component
function ThirdComponent() {
  return (
 <div className="thirdComponent">
  Third Component
 </div>
);
}
export default App;