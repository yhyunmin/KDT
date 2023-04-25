import "./App.scss";

function App() {
  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + "/1.png"} alt="" />
      <img src={process.env.PUBLIC_URL + "/2.png"} alt="" />
      <img src={process.env.PUBLIC_URL + "/3.png"} alt="" />
      <img src={process.env.PUBLIC_URL + "/4.png"} alt="" />
      <img src={process.env.PUBLIC_URL + "/5.png"} alt="" />
    </div>
  );
}

export default App;
