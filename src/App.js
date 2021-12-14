import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        My hello world
        <FirstComponet></FirstComponet>
        <SecondComponet></SecondComponet>
      </div>
    );
  }
}

//Class component
//create a component (line 19)
//disply componet by including component in the root App componet on line 10. 
class FirstComponet extends Component {
  render() {
    return (
      <div className="firstComponet">
       FirstComponet
      </div>
    );
  }
}

//Class component
class SecondComponet extends Component {
  render() {
    return (
      <div className="secondComponet">
       SecondComponet
      </div>
    );
  }
}
export default App;