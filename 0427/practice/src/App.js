import { useEffect, useState } from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Student";
import SearchParams from "./SearchParams";
import MainPage from "./MainPage";
import Axios from "axios";
import Photos from "./Photos";

const userInfo = {
  id: 1,
  name: "hyunmin",
  group: "codingon",
};

function App() {
  const [List, setList] = useState("[]");

  useEffect(() => {
    const getPhotos = async () => {
      const res = await Axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return setList(res.data.slice(0, 20));
    };

    getPhotos();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header userInfo={userInfo} />
        <Routes>
          <Route Component={MainPage}></Route>
          <Route
            // path="/student/:name"
            path={`/student/:name`}
            element={<Student userInfo={userInfo} />}
          ></Route>

          {/*  path="/student/:codingon"*/}
          {/*  // path={`/student/codingon`}*/}
          {/*  Component={Codingon}*/}
          {/*  element={<Codingon userInfo={userInfo} />}*/}
          {/*></Route>*/}
          <Route
            path={`/student/:new`}
            // path="/student/new"
            element={<SearchParams userInfo={userInfo} />}
          ></Route>
          <Route path={`/photos`} element={<Photos List={List} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
