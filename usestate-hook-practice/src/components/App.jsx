import React from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  now = now.slice(0, now.length - 2);
  const [time, setTime] = React.useState(now);

  function currentTime() {
    let now = new Date().toLocaleTimeString();
    now = now.slice(0, now.length - 2);
    setTime(now);
    setInterval(currentTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
