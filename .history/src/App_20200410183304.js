import React from 'react';
import Ninjas from './ninjas'

class App extends React.Component {
  state={
    ninjas:[
      {name:"Ejaz",age:"29",belt:"Black"},
      {name:"Asim",age:"27",belt:"Blue"},
      {name:"Qasim",age:"25",belt:"Green"},
      {name:"Asima",age:"23",belt:"White"}


    ]
  }
  return (
    <div className="App">
  <h1>My App</h1>
  <p>welcome:)</p>
  <Ninjas ninjas={this.state.ninjas}/>
    </div>
  );
}

export default App;
