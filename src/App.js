import { useState } from "react";
import "./App.css";
import Content from "./component/box";
import Succes from "./component/succes";
import Design from "./component/design";
import Privacy from "./component/privacy";

function App() {
  const [showcontent, setshowcontent] = useState(true);
  const [showhome, setshowhome] = useState(false);

  return (
    <div className="body">
      {(() => {
        if (showhome === false) {
          return <Privacy setshowhome={setshowhome}></Privacy>;
        } else if (showcontent && showhome) {
          return (
            <div>
              <Design></Design>
              <Content setshowcontent={setshowcontent}></Content>
            </div>
          );
        } else if (showcontent === false) {
          return (
            <Succes
              setshowcontent={setshowcontent}
              setshowhome={setshowhome}
            ></Succes>
          );
        }
      })()}

      {/* {showcontent ? (
        <div>
          <Design></Design>
          <Content setshowcontent={setshowcontent}></Content>
        </div>
      ) : (
        <Succes></Succes>
      )} */}
    </div>
  );
}

export default App;
