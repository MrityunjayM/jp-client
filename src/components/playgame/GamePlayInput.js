import React, { useState, useEffect, useCallback } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";

const GamePlayInput = () => {
  const [roomCode, setRoomCode] = useState(null);
  const [second, setSecond] = useState(80);

  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;

  const playthegame = async (e) => {
    e.preventDefault();
    const entryindatabase = await axios.post("/api/playgame/addroomcode", {
      data,
      roomCode,
    });

    if (entryindatabase.status === 200) {
      navigate("/startthegame", {
        state: {
          gamestart: true,
        },
      });
    }
  };

  const setTimer = useCallback(() => {
    let t = 0;
    let intervalId = setInterval(() => {
      t = t + 1;
      setSecond(second - t);
      if (t === 80) {
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
      // if (roomCode) {
      //   navigate("/startthegame", {
      //     state: {
      //       gamestart: true,
      //     },
      //   });
      // }
    };
  },[second,roomCode]);

  useEffect(() => {
    setTimer();
  }, []);


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
