import React from "react";

const TableComp = ({ userList }) => {
  const border = {
    borderCollapse: "collapse",
    textAlign: "center",
  };

  return (
    <>
      <table border="1" style={border}>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        {userList?.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default TableComp;
