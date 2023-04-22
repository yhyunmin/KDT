import React, { Component } from "react";

class ClassComponent extends Component {
  handleFocus = () => {
    this.input.focus();
  };

  render() {
    return (
      <>
        <p>클래스형 컴포너너느에서 버튼 클릭시 input focusing</p>
        <input
          type="text"
          ref={(ref) => {
            this.input = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default ClassComponent;
