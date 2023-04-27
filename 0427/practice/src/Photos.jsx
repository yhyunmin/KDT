import React from "react";

const Photos = ({ List }) => {
  console.log(List);

  return (
    <>
      {List.map((item) => {
        return <img src={item.url} alt={item.title} />;
      })}
    </>
  );
};

export default Photos;
