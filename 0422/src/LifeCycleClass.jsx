import React, { Component } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

class LifeCycleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 7,
      visible: true,
    };
  }

  changeNumber = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  changeVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const { visible, number } = this.state;
    const { changeNumber, changeVisible } = this;
    return (
      <>
        <h1>LifeCycleFunc</h1>
        <button onClick={changeNumber}>PLUS</button>
        <button onClick={changeVisible}>ON/OFF</button>
        {visible && <LifeCycleFuncChild number={number} />}
      </>
    );
  }
}

export default LifeCycleClass;
