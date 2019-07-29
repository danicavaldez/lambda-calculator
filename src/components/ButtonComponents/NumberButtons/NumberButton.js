import React from "react";
{/* Display a button element rendering the data being passed down from the parent container on props */}

const NumberButton = ({ number }) => {
  return (
    <>
      {number === '0'
        ? <button name='zero'>{ number }</button>
        : <button>{ number }</button>
      }
    </>
  );
};

export default NumberButton
