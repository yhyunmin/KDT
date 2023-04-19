import React, { Component, useState } from "react";

class App extends Component {
  render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [number, setNumber] = useState(0);
    return (
      <>
        <p>{number}</p>
        <button onClick={() => setNumber(number + 2)}>+2</button>
        <button onClick={() => setNumber(number - 1)}>-1</button>
      </>
    );
  }
}

export default App;
