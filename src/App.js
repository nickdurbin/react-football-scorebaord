import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { useState } from "react";

function App() {
  // Home and Away Team useState variables
  const [steelersScore, awayTeam] = useState(0);
  const [brownsScore, homeTeam] = useState(0);
  const resetScore = () => (homeTeam(brownsScore - brownsScore) + awayTeam(steelersScore - steelersScore));

  // Setting up more button functionality for the quarter
  const [quarterNumber, changeQuarter] = useState(1);

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
        <BottomRow />
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
        </div>
      </section>
    </div>
  );
}

export default App;
