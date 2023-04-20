import React from 'react';

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Codingon',
    };
  }

  render() {
    return (
      <div>
        클래스형 컴포넌트에서 이벤트 사용해보기
        <button>print console</button>
      </div>
    );
  }
}

export default ClassComponent;
