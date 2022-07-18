import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GamePlayInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  const [roomCode, setRoomCode] = useState();
  const [second, setSecond] = useState(20);

  const playthegame = async (e) => {
    e.preventDefault();
    const entryindatabase = await axios.post("/api/playgame/addroomcode", {
      data,
      roomCode,
    });
    if (entryindatabase.status == 200) {
      setTimer(1);
    }
  };

  useEffect(() => {
    setTimer();
  }, []);

  const setTimer = (information) => {
    let t = 0;
    let intervalId = setInterval(() => {
      t = t + 1;
      setSecond(second - t);
      if (t == 20 || information == 1) {
        clearTimer();
      }
    }, 1000);

    const clearTimer = () => {
      clearInterval(intervalId);
      if (!roomCode) {
        navigate("/gameexpired", {
          state: {
            gameexpired: true,
            data,
          },
        });
      }

      // if they will enter the roomcode and submit that successfully....
      if (roomCode) {
        navigate("/startthegame", {
          state: {
            gamestart: true,
          },
        });
      }
    };
  };

  return (
    <>
      {data ? (
        <div>
          <h1>hey you got a match with user {data.matchesforother.user}</h1>
          <h1>please open the ludo king app and enter the room code here.</h1>
          <h1>please respond in given time interval: {second}</h1>
          <form onSubmit={playthegame}>
            <div>
              <label>Enter the Room code here...</label>
              <input
                type="number"
                placeholder="Enter the Room code here..."
                onChange={(e) => setRoomCode(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Find your opponent</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default GamePlayInput;
