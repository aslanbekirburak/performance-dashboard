import React, { useEffect, useState } from "react";
import DrawGraphics from "./components/DrawGraphics";
import "./App.scss";

const URL = "https://bba-performance-analytics.herokuapp.com"

function App() {
  const [graphData, setGraphData] = useState();
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setGraphData(result);
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
