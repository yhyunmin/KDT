import React from "react";

const style = {
  color: "red",
};
const Food = (props = "낙곱새") => {
  return (
    <div>
      안녕하세요 <br />
      제가 진짜 좋아하는 음식은 <br />
      <strong style={style}>{props.food}</strong>
      입니다 :D
    </div>
  );
};

export default Food;
