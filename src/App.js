import React, { useEffect, useState } from "react";
import DrawGraphics from "./components/drawGraphics";
import "./App.scss";

function App() {
  const [graphData, setGraphData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((result) => {
        setGraphData(result);
        console.log("RESULT ", result);
      });
  }, []);
  return (
    <>
      <div className="graphic-wrapper">
        <div>
          <h3>TTFB</h3>
          <DrawGraphics dataToDraw={graphData && graphData.ttfbList} />
        </div>
        <div>
          <h3>FCP</h3>
          <DrawGraphics dataToDraw={graphData && graphData.fcpList} />
        </div>
      <div>
        <h3>DOM LOAD</h3>
        <DrawGraphics dataToDraw={graphData && graphData.domLoadList} />
      </div>
      <div>
        <h3>WINDOW LOAD</h3>
        <DrawGraphics dataToDraw={graphData && graphData.windowLoadList} />
      </div>
      </div>
    </>
  );
}

export default App;
