import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bills",
        complete: false
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  /* 
    3- 
    to make the component change dynamically whenever the store changes, use "this.emit"

    remember that the view/componenet will automatically/dynamically change because you have 1 state throughout the entire application 

  */
 
  getAll() {
    return this.todos;
  }

  /* 5-

  remember a dispatcher is a PubSub (publisher/subscriber) 
      i.e. EVERY store will receive the action once dispatched. 

  so this "handleActions", deteremines which actions this store will handle or care about 
    it does this using a switch statement
      it's a standard to always use uppercase for actions because they are CONSTANTS
  */
  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}

// 4- This method is the To-Do store registering itself to the dispacther for automatic updates (i.e. this is the listener)
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
