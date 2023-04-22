import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Codingon",
    };

    // this.printConsole = this.printConsole.bind(this);
  }

  // printConsole() {
  //   console.log(this);
  //   console.log('버튼 클릭! >> ', this.state);
  // }

  printConsole = () => {
    console.log(this);
    console.log("버튼 클릭! >> ", this.state);
  };
  printConsole2 = (name) => {
    console.log(name);
  };

  render() {
    return (
      <div>
        클래스형 컴포넌트에서 이벤트 사용해보기
        <button onClick={this.printConsole}>print console</button>
        이벤트 함수에 인자 보내는 방법
        <button onClick={() => this.printConsole2("hihi")}></button>
      </div>
    );
  }
}

export default ClassComponent;
