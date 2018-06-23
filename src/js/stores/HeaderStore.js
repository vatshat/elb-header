import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class HeadersStore extends EventEmitter {
  constructor() {
    super()
    this.headers = [
        {
            type: "request",
            timestamp: 235684679,
            content: {
                "accept-language": "en-US,en;q\u003d0.5",
                "host": "localhost:9090",
                "upgrade-insecure-requests": "1",
                "connection": "keep-alive",
                "accept-encoding": "gzip, deflate",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0",
                "accept": "text/html,application/xhtml+xml,application/xml;q\u003d0.9,*/*;q\u003d0.8"
            }
        }
    ];
    window.temp1 = this.headers;
  }

  createHeaders(text) {
    const timestamp = Date.now();

    this.headers.push({
      type,
      timestamp,
      content: {},
    });

    this.emit("change");
  }

  /* 
    3- 
    to make the component change dynamically whenever the store changes, use "this.emit"

    remember that the view/componenet will automatically/dynamically change because you have 1 state throughout the entire application 

  */
 
  getAll() {
    return this.headers;
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
      case "CREATE_HEADERS": {
        this.createHeader(action.text);
        break;
      }
      case "RECEIVE_HEADERS": {
        this.headers = action.Headers;
        this.emit("change");
        break;
      }
    }
  }

}
// 4- This method is the To-Do store registering itself to the dispacther for automatic updates (i.e. this is the listener)
const headersStore = new HeadersStore;
dispatcher.register(headersStore.handleActions.bind(headersStore));

export default headersStore;
