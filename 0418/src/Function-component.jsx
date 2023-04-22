import React from "react";
import PropTypes from "prop-types";

const FunctionComponent = (props) => {
  const { name, age } = props;
  console.log(props);
  return (
    <>
      <h1>Hello World, I am a Function Component</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </>
  );
};

FunctionComponent.defaultProps = {
  name: "윤성인",
  age: 20,
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
export default FunctionComponent;
