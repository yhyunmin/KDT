import React from "react";
import PropTypes from "prop-types";

//import { Component } from 'react';
class ClassComponent extends React.Component {
  //클래스형 컴포넌트 render() 함수 필수
  render() {
    console.log(this.props);
    // this.props { name:홍길동, age:23}
    const { name, age } = this.props;
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
      </div>
    );
  }
}
//  단점 :오류만 체크해주지 실행이 안되는건 아님 !

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
export default ClassComponent;
