import React, { useState, useContext } from "react";
import axios from "axios";
import { spinnerContext } from "../context/spinnerContext";

function AdminUserForGame() {
  const { setLoading } = useContext(spinnerContext);
  const [phoneInput, setContact] = useState();
  const addAdminforPlaying = async (e) => {
    setLoading(true);
    e.preventDefault();
    const adduser = await axios.post("/api/user/adminplayerregister", {
      phoneInput,
    });
    if (adduser.status == 200) {
      setLoading(false);
      alert("user created successfully");
    }
  };
  return (
    <div className="text-center mt-5">
      <h5>Add the user who will controll the game as admin</h5>
      <form onSubmit={addAdminforPlaying}>
        <div>
          <label>Enter the phone no of User</label>
          <input
            type="number"
            placeholder="Enter the phone no of User"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add user</button>
        </div>
      </form>
    </div>
  );
}
export default AdminUserForGame;
