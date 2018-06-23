import dispatcher from "../dispatcher";

// 6- dispatcher.dispatch is how you send actions to the dispatcher 

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  /* 
    https://stackoverflow.com/questions/39019094/reactjs-get-json-object-data-from-an-url
    
    axios("http://someurl.com/somedataendpoint").then((data) => {
      console.log("got the data!", data);
    })
    
    for ajax calls, you can fire off 3 actions, 
      the 1st 'FETCH_TODOS' is to kick off the process maybe show a spinner by simply setting a specific boolean in the state
    the 2nd action RECEIVE_TODOS is within the promise to notify that you've now received the data 
    the 3rd action can be an error if the ajax call fails
  */

  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});

    /*
      if (false){
        dispatcher.dispatch({type: "FETCH_TODOS_ERROR"})
      }
    */
  }, 1000);
}
