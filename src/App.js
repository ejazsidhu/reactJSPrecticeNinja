import React from 'react';
import Ninjas from './ninjas'
import AddNinja from './addNinja';
import TodoList from './todo-components/todo-list';
import AddTodo from './todo-components/addTodo';
import Navbar from './navigation-prectice/navbar';

import {BrowserRouter,Route, Switch} from 'react-router-dom';
import {Home,About,Contact,Page} from './navigation-prectice'

class App extends React.Component {
  state={
    ninjas:[
      {id:1,name:"Ejaz",age:"29",belt:"Black"},
      {id:2,name:"Asim",age:"27",belt:"Blue"},
      {id:3,name:"Qasim",age:"25",belt:"Green"},
      {id:4,name:"Asima",age:"23",belt:"White"}


    ],
    todoList:[
      {
        id:0,content:'enter first todo'
      }
    ]
  }
 //#region oldCode
 AddNinja=(ninja)=>{
  ninja.id=Math.random();
  const ninjas=[...this.state.ninjas,ninja];
  this.setState({
    ninjas:ninjas
  })
}

deleteNinja=(id)=>{
  console.log(id);
  const ninjas=this.state.ninjas.filter(ninja=>
    {
      return ninja.id !==id;
    });
  this.setState({
    ninjas:ninjas
  })
}

addTodo=(todo)=>{
  todo.id=Math.random();
  const todoList=[...this.state.todoList,todo];
  this.setState({
    todoList:todoList
  })
}

deleteTodo=(id)=>{
  const todoList=this.state.todoList.filter(todo=>{
    return todo.id!==id;
  })
  this.setState({
    todoList:todoList
  })
}
//#endregion
render(){
  return (
    <BrowserRouter>
     <div >
  {/* <h1 className="center blue-text">Todo App</h1> */}
  
{/* <AddNinja AddNinja={this.AddNinja} />
  <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/> */}
{/* <TodoList todoList={this.state.todoList} deleteTodo={this.deleteTodo}/>
<AddTodo addTodo={this.addTodo} /> */}

      <Navbar/>
  <Switch>
  <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/:post_id" component={Page}/>
  </Switch>


    </div>
    </BrowserRouter>
   
  );
}
}

export default App;
