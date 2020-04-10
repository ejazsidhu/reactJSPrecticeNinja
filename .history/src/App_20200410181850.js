import React from 'react';
import Ninjas from './ninjas'

class App extends React.Component {
  render(){
    return (
      <div className="App">
    <h1>My App</h1>
    <p>welcome:)</p>
    <Ninjas name="Asim Ali" age="27" belt="Blue"/>
      </div>
    );
  }

}

export default App;
