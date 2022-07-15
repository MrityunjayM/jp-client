import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Waitingforcode = () => {
  const location = useLocation();
  const { data } = location.state;
  const [second, setSecond] = useState(180);

  useEffect(() => {
    setTimer();
  }, []);
  const setTimer = () => {
    let t = 0;
    let intervalId = setInterval(() => {
      t = t + 1;
      setSecond(second - t);
      if (t == 180) {
        clearTimer();
      }
    }, 1000);
    const clearTimer = () => {
      clearInterval(intervalId);
    };
  };

  return (
    <>
      {data ? (
        <div>
          <h1>
            hey you got a match with user
            {data.findingthematch.opponentuser.phoneNo}
          </h1>
          <h1>
            Please wait for 3 minutes, you will get the room code of ludo king
            from your opponent user
          </h1>
          <h1>{second}</h1>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Waitingforcode;
