import React, { createContext, useState } from "react";
import axios from "axios";
import authHeader from "../user/auth_header";

export const battleContext = createContext();
const { Provider } = battleContext;
export const BattleProvider = ({ children }) => {
  var [battleData, setBattleData] = useState([]);
  var fetchBattle = async () => {
    const battle = await axios.get("/api/categoryofgame", {
      headers: authHeader(),
    });
    return battle;
    // setBattleData(battle.data);
  };

  return (
    <Provider value={{ fetchBattle, battleData, setBattleData }}>
      {children}
    </Provider>
  );
};
