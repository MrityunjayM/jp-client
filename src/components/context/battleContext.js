import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const battleContext = createContext();
const { Provider } = battleContext;

export const BattleProvider = ({ children }) => {
  const [battleData, setBattleData] = useState([]);
  const fetchBattle = async () => {
    const data = await axios.get("/api/categoryofgame");

    console.log(data, "MRITYUNJAYY");
  };

  return (
    <Provider value={{ fetchBattle, battleData, setBattleData }}>
      {children}
    </Provider>
  );
};
