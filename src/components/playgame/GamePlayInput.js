import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "reactstrap";
import axios from "axios";
const GamePlayInput = () => {
  const location = useLocation();
  const { name, pricetoenter, numberofPlayers, waitingPlayer } = location.state;
  const [roomCode, setRoomCode] = useState();
  //   alert("please open the ludo king app and enter the room code here.");
  const playthegame = async (e) => {
    e.preventDefault();
    console.log(roomCode);
    const entryindatabase = await axios.post("/api/playgame/addroomcode", {
      roomCode,
      name,
      pricetoenter,
      numberofPlayers,
      waitingPlayer,
    });
    console.log(entryindatabase.data.message);
  };
  return (
    <>
      <h1>please open the ludo king app and enter the room code here.</h1>
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
    </>
  );
};

export default GamePlayInput;
