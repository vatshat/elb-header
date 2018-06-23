import React from "react";

import PreHeader from "../components/PreHeader";

export default class Headers extends React.Component {
  constructor(){
    super();
    // https://codeburst.io/reactjs-a-quick-tutorial-to-build-dynamic-json-based-form-a4768b3151c0

    this.state = {
      preHeaders: [
        {
          type: "request",
          side: "client side connection",
          timestamp: Date.now(),
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
      ],
    }
  }
  
  render() {
    // https://zhenyong.github.io/react/docs/transferring-props.html

    const { preHeaders } = this.state;

    const PreHeaderComponents = preHeaders.map((preHeader) => {
      const id = preHeader.timestamp;
      preHeader.timestamp = new Date(id);
      return <PreHeader key={id} {...preHeader} />;
    });

    return (
      <div>
        <h1>Headers</h1>
        <div className="row">
          {PreHeaderComponents}
        </div>
      </div>
    );
  }
}
