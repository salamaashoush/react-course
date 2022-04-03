import React, { useEffect, useState } from "react";

export function Timer({ id }) {
  const [count, setCounter] = useState(0);

  // setter(value)
  // setter((oldValue) => newState)
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("interval is counting...  ", id);
      setCounter((oldCounter) => oldCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [id]);

  return <h1>{count}</h1>;
}
