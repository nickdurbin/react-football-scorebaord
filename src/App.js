import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  // Home and Away Team useState variables
  const [steelersScore, awayTeam] = useState(0);
  const [brownsScore, homeTeam] = useState(0);
  const resetScore = () => (homeTeam(brownsScore - brownsScore) + awayTeam(steelersScore - steelersScore) + changeDown(downNumber - downNumber + 1) + changeQuarter(quarterNumber - quarterNumber + 1) + changeToGo(toGoNumber - toGoNumber + 10) + changeBallOn(ballOnNumber - ballOnNumber + 20));

  // // Setting up more button functionality for the BottowRow components
  const [quarterNumber, changeQuarter] = useState(1);
  const [downNumber, changeDown] = useState(1);
  const [toGoNumber, changeToGo] = useState(10);
  const [ballOnNumber, changeBallOn] = useState(20);

  // Require and style the background image
  const brownsImg = require('../src/Browns.jpg');
  const backgroundStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${brownsImg})`,
    backgroundSize: 'cover'
  };

  return (
    <div className="container" style={ backgroundStyle }>
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Browns</h2>
            <div className="home__score">{ brownsScore }</div>
          </div>
          <div className="timer">01:46</div>
          <div className="away">
            <h2 className="away__name">Steelers</h2>
            <div className="away__score">{ steelersScore }</div>
          </div>
        </div>
        <BottomRow quarterNumber={quarterNumber} downNumber={downNumber} toGoNumber={toGoNumber} ballOnNumber={ballOnNumber} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick={() => homeTeam(brownsScore + 7) } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => homeTeam(brownsScore + 3) } className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => awayTeam(steelersScore + 7) } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => awayTeam(steelersScore + 3) } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="otherButtons">
          <button className="newGame" onClick={() => resetScore() }>New Game</button>
          <button className="newQuarter" onClick={() => changeQuarter(quarterNumber + 1) }>Quarter</button>
          <button className="newDown" onClick={() => changeDown(downNumber + 1) }>Down</button>
          <button className="toGo" onClick={() => changeToGo(toGoNumber + 1) }>To Go</button>
          <button className="ball" onClick={() => changeBallOn(ballOnNumber + 1) }>Ball On</button>
        </div>
      </section>
    </div>
  );
}

export default App;