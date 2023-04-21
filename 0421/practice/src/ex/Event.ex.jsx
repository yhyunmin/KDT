import React, { useState } from "react";

const EventEx = () => {
  const userList = [
    {
      id: 1,
      user: "코디",
      email: "codi@gmail.com",
    },
    {
      id: 2,
      user: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ];
  const [list, setList] = useState(userList);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const addList = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        user: user,
        email: email,
      },
    ]);
  };
  const deleteList = (id) => {
    setList(list.filter((obj) => obj.id !== id));
  };
  return (
    <article>
      <input
        type="text"
        placeholder="이름"
        value={user}
        onChange={(event) => {
          setUser(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        onKeyDown={(event) => {
          console.log(event.key);
          event.key === "Enter" && addList();
        }}
      />
      <button type="button" onClick={addList}>
        등록
      </button>
      {list.map((v, i) => {
        return (
          <h2 key={i} onDoubleClick={() => deleteList(v.id)}>
            {v.user}:{v.email}
          </h2>
        );
      })}
    </article>
  );
};

export default EventEx;
