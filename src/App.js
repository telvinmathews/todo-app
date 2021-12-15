import React, { Component } from 'react';
import FirstComponent from  './comonents/learning-examples/firstComponent';
import SecondComponent from  './comonents/learning-examples/secondComponent';
import ThirdComponent from  './comonents/learning-examples/thirdComponent';
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

//Class component
//fuction component
export default App;