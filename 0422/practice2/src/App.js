import "bulma/css/bulma.min.css";
import "./App.css";
import PostList from "./PostList";

function App() {
  return (
    <>
      <header>
        <h1>📮Post List</h1>
      </header>
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;
