import React from "react";

class ClassComponent extends React.Component {
  render() {
    const { text, valid } = this.props;
    const showLog = () => {
      console.log(valid);
    };

    return (
      <>
        <h1>{text}</h1>
        <button onClick={showLog}>콘솔 메시지</button>
      </>
    );
  }
}

export default ClassComponent;
