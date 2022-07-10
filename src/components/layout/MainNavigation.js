import React from "react";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  return (
    <>
      <div>
        <Link style={{ margin: 10 }} to="signup">
          Sign-up
        </Link>
        <Link style={{ margin: 10 }} to="login">
          LogIn
        </Link>
        <Link style={{ margin: 10 }} to="addbattle">
          AddBattle
        </Link>
        <Link style={{ display: "none" }} to="allbattle">
          AllBattle
        </Link>
        <Link style={{ margin: 10 }} to="givecointouser">
          GiveCoinToUser
        </Link>
      </div>
    </>
  );
};

export default MainNavigation;
