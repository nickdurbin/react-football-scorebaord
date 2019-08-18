//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { useState } from "react";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [steelersScore, awayTeam] = useState(0);
  const [brownsScore, homeTeam] = useState(0);
  const [quarterNumber, changeQuarter] = useState(1);
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

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

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
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => homeTeam(brownsScore + 7) } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => homeTeam(brownsScore + 3) } className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => awayTeam(steelersScore + 7) } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => awayTeam(steelersScore + 3) } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="otherButtons">
          <button className="newGame" onClick={() => awayTeam(steelersScore - steelersScore) + homeTeam(brownsScore - brownsScore) }
          >New Game</button>
          <button className="newQuarter" onClick={() => changeQuarter(quarterNumber + 1) }>Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
