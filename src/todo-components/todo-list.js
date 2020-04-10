import React, { PureComponent } from 'react';
 const TodoList=({todoList,deleteTodo})=>{

    const list=todoList.length ? (
 todoList.map(todo=>{
     return(
         <div className="collection-item" key={todo.id}>
        <span  >{todo.content}<a href="#" onClick={()=>{deleteTodo(todo.id)}} className="secondary-content red-text"><i className="material-icons">delete_forever</i></a></span>


         </div>
     )
 })

    ) :              (<p className="center">List is empty</p>)  ;


     return(
<div className="collection">
{list}
</div>
     )

};

export default TodoList;