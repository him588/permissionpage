import { useState } from "react";
import "./App.css";
import Content from "./component/box";
import Succes from "./component/succes";

function App() {
  const [showcontent, setshowcontent] = useState(true);
  return (
    <div className="body">
      <div className="div top_left"></div>
      <div className="div top_right"></div>
      <div className="div bottom_left"></div>
      <div className="div bottom_right"></div>
      <div className="cover"></div>
      {showcontent ? (
        <div className="box">
          <Content setshowcontent={setshowcontent}></Content>
        </div>
      ) : (
        <div className="new_box">
          <Succes></Succes>
        </div>
      )}
    </div>
  );
}

export default App;
