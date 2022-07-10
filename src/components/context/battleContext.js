import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const battleContext = createContext();
const { Provider } = battleContext;

export const BattleProvider = ({ children }) => {
  const [battleData, setBattleData] = useState([]);
  const fetchBattle = async () => {
    const battle = await axios.get("/api/categoryofgame");
    return battle;
    // setBattleData(battle.data);
  };
  return (
    <Provider value={{ fetchBattle, battleData, setBattleData }}>
      {children}
    </Provider>
  );
};
