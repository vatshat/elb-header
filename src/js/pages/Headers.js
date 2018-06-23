import React from "react";

export default class Headers extends React.Component {
  constructor(){
    super();
    // https://codeburst.io/reactjs-a-quick-tutorial-to-build-dynamic-json-based-form-a4768b3151c0

    this.state = {
      preHeader: [
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
      ],
    }
  }
  
  componentWillMount() {
    // https://forum.freecodecamp.org/t/reactjs-using-setstate-to-update-a-single-property-on-an-object/146772
    
    let updatePre = JSON.parse(JSON.stringify(this.state.preHeader));
    updatePre[0].timestamp = new Date(updatePre[0].timestamp);
    
    this.setState({preHeader: updatePre});
  }

  render() {
    return (
      <div>
        <h1>Headers</h1>
        <pre>{JSON.stringify(this.state.preHeader[0], null, 2)}</pre>
      </div>
    );
  }
}
