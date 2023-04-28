import "./App.scss";
import grass from "./img/grass.png";

function App() {
  return (
    <div className="container">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
      <div className="circle circle6"></div>
      <div className="circle circle7"></div>
      <div className="gr">
        <img src={grass} alt="사진" />
        {/*<img src="./img/grass.png" alt="" />*/}
      </div>
    </div>
  );
}

export default App;
