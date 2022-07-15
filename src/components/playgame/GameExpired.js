import React, { Component } from "react";
import { useLocation } from "react-router-dom";
const GameExpired = () => {
  const location = useLocation();
  const { gameexpired } = location.state;
  return (
    <>
      {gameexpired ? (
        <div>
          <h5>your game session is expired</h5>
          <h5>you haven't entered the code in given time</h5>
        </div>
      ) : (
        <div>
          <h5>
            Sorry, your opponent player haven't entered the code.Please try
            again
          </h5>
        </div>
      )}
    </>
  );
};
export default GameExpired;
