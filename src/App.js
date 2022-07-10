import React, { useContext } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/context/authContext";
import { BattleProvider } from "./components/context/battleContext";
import MainNavigation from "./components/layout/MainNavigation";
import SignUp from "./components/user/Signup";
import LogIn from "./components/user/Login";
import Spinner from "./components/loader/Spinner";
import Message from "./components/flashMessage/FlashMessage";
import AddBattle from "./components/adminControl/AddBattle";
import AllBattle from "./components/adminControl/AllBattle";
import EditBattle from "./components/adminControl/EditBattle";
import GiveCoinToUser from "./components/adminControl/GiveCointouser";
import Coinofuser from "./components/adminControl/CoinofUser";
// import Home from "./components/layout/Home";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        {/* Static component */}

        <MainNavigation />
        <Spinner />

        {/* Routing component */}
        <BattleProvider>
          <Routes>
            <Route exact path="/signup" element={<SignUp />} />
            {/* <Route exact path="/home" element={<Home />} /> */}
            <Route exact path="/login" element={<LogIn />} />
            // battle part
            <Route exact path="/addbattle" element={<AddBattle />} />
            <Route exact path="/allbattle" element={<AllBattle />} />
            <Route exact path="/edit/:id" element={<EditBattle />} />
            {/* // for adding coin to user  */}
            <Route exact path="/givecointouser" element={<GiveCoinToUser />} />
            <Route exact path="/coinofuser" element={<Coinofuser />} />
            {/* <Route exact path="/delete/:id" element={<DeleteBattle />} /> */}
          </Routes>
        </BattleProvider>
      </AuthProvider>
    </Router>
  );
};
export default App;
