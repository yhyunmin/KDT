import React, { Component } from "react";

class HandlerEx extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello World",
    };
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={() => this.setState({ text: "Goodbye Word" })}>
          굿바이
        </button>
      </div>
    );
  }
}

export default HandlerEx;
