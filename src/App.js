import react, { useEffect } from "react";
import logo from "./logo.svg";
import "./app.scss";
import LandingForm from "./components/LandingForm";

function App() {
  return (
    <div className="App">
      <div className="top">
        <h1 className="top-text">Let's Speed Up Customer Call Backs</h1>
        <h1 className="top-text">Why,You Ask?</h1>
      </div>
      <div className="bottom">
        <h1>You're Missing Out on Deals!</h1>
        <div className="why">
          <p>This is the first reason</p>
        </div>
        <div className="why">
          <p>This is the second reason</p>
        </div>
        <div className="why">
          <p>This is the third reason</p>
        </div>
      </div>

      <LandingForm />
    </div>
  );
}

export default App;
