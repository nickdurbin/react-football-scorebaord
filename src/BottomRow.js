import React from "react";
import "./App.css";

const BottomRow = ({ quarterNumber, downNumber, toGoNumber, ballOnNumber }) => {

  // generic variable for quarter till figure out how to pass state
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{ downNumber }</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{ toGoNumber }</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ ballOnNumber }</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{ quarterNumber }</div>
      </div>
    </div>
  );
};

export default BottomRow;