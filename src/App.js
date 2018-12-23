import React, { Component } from 'react';
import './App.css';
import TrackVisibility from 'react-on-screen';
import FirstSegment from './FirstSegment';
import SecondSegment from './SecondSegment';
import ThirdSegment from './ThirdSegment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrackVisibility offset={300}>
          <FirstSegment />
        </TrackVisibility>
        <TrackVisibility offset={300}>
          <SecondSegment />
        </TrackVisibility>
        <TrackVisibility offset={450}>
          <ThirdSegment />
        </TrackVisibility>
      </div>
    );
  }
}

export default App;
