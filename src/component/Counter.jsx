import React, {
  useState,
} from "react";


const Counter = () => {
  const [ count, setCount ] = useState(0);
  
  const handleClick = () => {
    setCount((oldCount) => {
      return oldCount + 1;
    });
  };

  return (
    <>

      <h1>{count}</h1>

      <button
        onClick={() => handleClick()}
      >
        Increment
      </button>

    </>
  );
};

export default Counter;