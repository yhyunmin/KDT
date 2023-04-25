import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import PostItem from "./PostItem";
import Axios from "axios";

// 더미데이터
// const fakePosts = [
//   {
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
//   },
//   {
//     id: 4,
//     title: "eum et est occaecati",
//     body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
//   },
//   {
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
//   },
//   {
//     id: 6,
//     title: "dolorem eum magni eos aperiam quia",
//     body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
//   },
//   {
//     id: 7,
//     title: "magnam facilis autem",
//     body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
//   },
//   {
//     id: 8,
//     title: "dolorem dolore est ipsam",
//     body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
//   },
//   {
//     id: 9,
//     title: "nesciunt iure omnis dolorem tempora et accusantium",
//     body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
//   },
//   {
//     id: 10,
//     title: "optio molestias id quia eum",
//     body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
//   },
// ];
// TODO: 해당 컴포넌트가 "mount" 되었을 때
// posts state에 fakePosts 데이터를 설정하기
// 단, setTimeout()을 이용해 2초 후 posts state에 저장한다.
const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getList = async () => {
    const res = await Axios.get("https://jsonplaceholder.typicode.com/posts/");
    setPosts(res.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <section>
      {!posts.length ? <Loading /> : <PostItem posts={posts} />};
    </section>
  );
};
export default PostList;
