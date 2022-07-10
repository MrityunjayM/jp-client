import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Coinofuser = () => {
  const location = useLocation();
  const { phoneNo } = location.state;
  useEffect(() => {
    coinUpdating();
  }, []);
  const coinUpdating = async () => {
    const coinupdateforuser = await axios.post("/api/cointouser/all", {
      phoneNo,
    });
    console.log(coinupdateforuser);
  };
};

export default Coinofuser;
