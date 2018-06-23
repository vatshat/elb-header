import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
/* 8- 
  import * is equivalent to doing the following
  { 
    createTodo: function() {}
    deleteTodo: function() {}    
  }

  is a clean way to define and import all functions in another module
*/

import TodoStore from "../stores/TodoStore";


export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  // 2 - this turns ON the listener which continuously listens for the store's this.emit for changes in the store
  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  /* 10 - it's important to ALWAYS!!! removeListerner on all on unmount otherwise it causes memory leaks, 
    because every time you change a route a new componenent is created but the old component is not deleted 
      i.e. there are listeners still bound which are consuming memory and causing the application to become slower
        
    you can track number of store listeners by doing...
      console.log("count", TodoStore.listenerCount("change"));
  */

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  // 1 -this is the method which actually dynamically updates the new view when the store changes
  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  // 7- this is a button which triggers an action that updates the store, which will update the component
  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
