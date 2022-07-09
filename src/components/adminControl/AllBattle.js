import React, { useContext, useEffect } from "react";
import { battleContext } from "../context/battleContext";

const AllBattle = () => {
  const { fetchBattle } = useContext(battleContext);
  useEffect(() => {
    fetchBattle();
  }, []);
  return (
    <>
      <h1>mrityunjay</h1>
    </>
  );
};

export default AllBattle;
