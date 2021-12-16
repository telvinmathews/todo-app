import React, { Component } from 'react';
import FirstComponent from  './comonents/learning-examples/firstComponent';
import SecondComponent from  './comonents/learning-examples/secondComponent';
import ThirdComponent from  './comonents/learning-examples/thirdComponent';
import Counter from './comonents/counter/Counter';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render () {
      return (
          <div className='LearnigComponents'>
        My hello world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
          </div>
      )
  }
}
export default App;