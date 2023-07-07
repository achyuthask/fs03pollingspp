
import React, { useState, useEffect } from 'react';
import './timer.css';

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      setCount(10); // Reset the count to 10 when it reaches 0
    }
  }, [count]);

  return (
    <div className='ard'>
      <h1>Timer: {count}</h1>
    </div>
  );
}

export default Timer;
