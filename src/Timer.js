import { useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [show, setShow] = useState("false");
  function changeTime() {
    setShow(false);
    this.intervalID = setInterval(() => {
      setTime((oldValue) => {
        const newTime = oldValue + +1;
        return newTime;
      });
    }, 1000);
  }
  function stopChangeTime() {
    setShow(true);
    clearInterval(this.intervalID);
  }
  console.log(show);
  return (
    <div>
      <h1>time: {time}</h1>
      <div>
        <button
          className="normal-button"
          onClick={() => (show === true ? changeTime() : stopChangeTime())}
        >
          {show ? "Start" : "Stop"}{" "}
        </button>
      </div>
    </div>
  );
}

export default Timer;
