import { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0);

  function asyTimer() {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }

  return(
    <div>
      <h1>counter: {count}</h1>
      <div>
        <button className="normal-button" onClick={() => setCount(count + 1)}>
          {" "}
          Add{" "}
        </button>
        <button className="normal-button" onClick={() => setCount(count - 1)}>
          {" "}
          Subtract{" "}
        </button>
      </div>
        <button className="normal-button"
          onClick={() =>
            count % 2 === 1 ? setCount(count + 1) : setCount(count)
          }
        >
          Increment-If-Odd
        </button>
        <button className="normal-button" onClick={() => asyTimer()}>
          Async-Inc
        </button>
    </div>
  )
}

export default Counter