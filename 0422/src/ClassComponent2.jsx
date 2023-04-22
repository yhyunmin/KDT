import React, { Component } from "react";

class ClassComponent extends Component {
  // 1.createRef() 로 객체 생성
  myInput = React.createRef();
  handleFocus = () => {
    this.input.current.focus();
    // 3. current 이용해서 DOM 요소 접근
  };

  render() {
    return (
      <>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input focusing</p>
        <input type="text" ref={this.myInput} />
        {/*  ref={this.myInput}으로 연결*/}
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default ClassComponent;
