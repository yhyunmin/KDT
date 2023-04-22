import React, { Component } from "react";

class LifeCycleClassChild extends Component {
  // 컴포넌트가 mount 되었을 때 실행
  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate() {
    console.log("update");
  }

  render() {
    return (
      <>
        <h1>LifeCycleClassChild</h1>
        <p>LifeCycleClassChild {this.pr}</p>
      </>
    );
  }
}

export default LifeCycleClassChild;
