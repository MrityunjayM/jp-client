import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Waitingforcode = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  const [second, setSecond] = useState(20);
  const [roomCode, setRoomCode] = useState();

  useEffect(() => {
    setTimer();
  }, []);

  const setTimer = () => {
    let t = 0;
    let intervalId = setInterval(async () => {
      t = t + 1;
      setSecond(second - t);
      if (t == 20) {
        clearTimer();
      }
      const findingTheCode = await axios.get("/api/playgame/getroomcode");
      if (findingTheCode.status == 202) {
        // findingTheCode.data.roomCode
        setRoomCode("12345");
        clearTimer(findingTheCode.status);
      }
    }, 1000);

    const clearTimer = (status) => {
      clearInterval(intervalId);
      if (!roomCode) {
        navigate("/gameexpired", {
          state: {
            gameexpired: false,
            data,
          },
        });
      }
      if (status == 202) {
        navigate("/startthegame");
      }
    };
  };

  return (
    <>
      {data ? (
        <div>
          <h1>
            hey you got a match with user
            {data.findingthematch.opponentuser}
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
