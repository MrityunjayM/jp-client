import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const GameExpired = () => {
  const location = useLocation();
  const { gameexpired, data } = location.state;
  useEffect(() => {
    fn();
  }, []);
  const fn = async () => {
    if (data) {
      const removeHistory = await axios.post("/api/removehistory/", data);
      console.log(removeHistory);
    }
  };
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
