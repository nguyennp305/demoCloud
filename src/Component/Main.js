import React, { useState, useEffect } from "react";

function MainPage() {
  const [numRequests, setNumRequests] = useState(1);
  const [requestTimes, setRequestTimes] = useState([]);
  const [averageTime, setAverageTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(makeRequests, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, numRequests]);

  async function makeRequests() {
    const url = "http://44.202.179.112:8080/"; // Replace with your API endpoint URL

    let times = [];

    for (let i = 0; i < numRequests; i++) {
      const startTime = performance.now();

      fetch(url);

      const endTime = performance.now();
      const duration = endTime - startTime;

      times.push(duration);
    }

    const totalDuration = times.reduce((total, duration) => total + duration);
    const averageDuration = totalDuration / numRequests;

    setRequestTimes((requestTimes) => [...requestTimes, ...times]);
    setAverageTime(averageDuration);
    setNumRequests((numRequests) => numRequests * 2);
  }

  function handleChangeStatus() {
    setIsRunning(!isRunning);
  }

  return (
    <div>
      <p>
        Aveage response time for {numRequests} requests: {averageTime.toFixed(2)}ms
      </p>
      {<button onClick={handleChangeStatus}>{isRunning ? "Stop" : "Start"}</button>}
    </div>
  );
}
export default MainPage;