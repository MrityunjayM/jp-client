import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Message from "../flashMessage/FlashMessage";
import { useNavigate } from "react-router-dom";

// export const coinContext = useContext();
// const Provider = { coinContext };
const GiveCoinToUser = () => {
  //taking phoneno of use
  const [phoneNo, setContact] = useState();
  // user found or not.bydefault no user existed.
  const [founduser, setToFoundUser] = useState(false);
  // set coin for user.
  const [coin, setCoin] = useState();
  // for checking status of coinofuser.
  const [coinaddstatus, setStatus] = useState(1);
  const navigate = useNavigate();
  const userChecking = async (e) => {
    e.preventDefault();
    if (!founduser) {
      const foundUser = await axios.post("/api/cointouser", { phoneNo });
      const { status } = foundUser;
      if (status === 200) {
        // console.log("balajee mishra");
        setToFoundUser(true);
      }
    } else {
      const addCoin = await axios.post("/api/cointouser/add", {
        coin,
        phoneNo,
      });
      const { status } = addCoin;
      // for successfully added
      if (status === 200) navigate("/coinofuser", { state: { phoneNo } });
      // in case of failed to adding in database.
      else {
        setStatus(0);
      }
    }
  };
  return (
    <>
      {!coinaddstatus ? (
        <Message
          message="Something went wrong, please try again"
          success={false}
        />
      ) : (
        ""
      )}
      <form onSubmit={userChecking}>
        <label>Enter the phone no of User</label>
        <input
          type="number"
          placeholder="Enter the phone no of User"
          onChange={(e) => setContact(e.target.value)}
        />
        {founduser ? (
          <div>
            <Message message="user found successfully" success={true} />
            <label>Give the coin to user</label>
            <input
              type="number"
              placeholder="Give the coin to user"
              onChange={(e) => setCoin(e.target.value)}
            />
            <button type="submit">Add coin</button>
          </div>
        ) : (
          ""
        )}
        {!founduser ? <button type="submit">search user</button> : ""}
      </form>
    </>
  );
};
export default GiveCoinToUser;
