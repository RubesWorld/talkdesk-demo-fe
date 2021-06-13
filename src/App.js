import react, { useEffect, useState } from "react";
import "./app.scss";
import LandingForm from "./components/LandingForm";

function App() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="App">
      <div className="top">
        <h1 className="top-text first">Let's Speed Up Customer Call Backs</h1>
        <h1 className="top-text second">Why,You Ask?</h1>
      </div>
      <div className="bottom">
        <h1>You're Missing Out on Deals!</h1>
        <div className="why">
          <p>
            The customer submitted a form for a reason. Don’t keep them waiting!{" "}
          </p>
        </div>
        <div className="why">
          <p>
            Speeding up callbacks means more of an opportunity to catch warm
            leads or concerned customers while they’re hot!{" "}
          </p>
        </div>
        <div className="why">
          <p>
            The longer you wait to call, the more chance they find a solution
            elsewhere or churn.{" "}
          </p>
        </div>
      </div>

      <LandingForm setPopup={setPopup} />
    </div>
  );
}

export default App;
