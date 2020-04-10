import React from 'react';
import Ninjas from './ninjas'
import AddNinja from './addNinja';

class App extends React.Component {
  state={
    ninjas:[
      {id:1,name:"Ejaz",age:"29",belt:"Black"},
      {id:2,name:"Asim",age:"27",belt:"Blue"},
      {id:3,name:"Qasim",age:"25",belt:"Green"},
      {id:4,name:"Asima",age:"23",belt:"White"}


    ]
  }
render(){
  return (
    <div className="App">
  <h1>My App</h1>
  <p>welcome:)</p>
<AddNinja/>
  {/* <Ninjas ninjas={this.state.ninjas}/> */}
    </div>
  );
}
}

export default App;
