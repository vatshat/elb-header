import React from "react";

export default class PreHeader extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <pre className="col-lg-4">
        {JSON.stringify(this.props, null, 2)}
      </pre>
    );
  }
}
