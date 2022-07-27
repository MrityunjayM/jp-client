import React, { useEffect } from "react";
import OneSignal from "react-onesignal";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/authContext";
import { BattleProvider } from "./components/context/battleContext";
import { SpinnerProvider } from "./components/context/spinnerContext";
import { TimerProvider } from "./components/context/timerContext";

import MainNavigation from "./components/layout/MainNavigation";
import SignUp from "./components/user/Signup";
import LogIn from "./components/user/Login";
import Spinner from "./components/loader/Spinner";
import AddBattle from "./components/adminControl/AddBattle";
import AllBattle from "./components/adminControl/AllBattle";
import EditBattle from "./components/adminControl/EditBattle";
import GiveCoinToUser from "./components/adminControl/GiveCointouser";
import Coinofuser from "./components/adminControl/CoinofUser";
import ListedGame from "./components/playgame/ListedGame";
import GamePlayInput from "./components/playgame/GamePlayInput";
import Waitingforcode from "./components/playgame/Waitingforcode";
import GameExpired from "./components/playgame/GameExpired";
import ImageUploader from "./components/aftergame/ImageUploader";
import StarttheGame from "./components/playgame/StarttheGame";
import SuperAdmin from "./components/superadmin/SuperAdmin";
import AdminUserForGame from "./components/superadmin/AdminUserForGame";
import AllAdminPlayer from "./components/superadmin/AllAdminPlayer";
import Home from "./components/user/Home";

import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  
  useEffect(() => {
    OneSignal.init({
      appId: "5f4f8f0b-19aa-4ef4-9113-319e4ba7e91a",
    });
  }, []);

  return (
      <SpinnerProvider>
        <AuthProvider>
          <TimerProvider>
            {/* Static component */}

            <MainNavigation />
            <Spinner />

            {/* Routing component */}
            {/* {["/", "/home"]} */}
            <BattleProvider>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<LogIn />} />
                
                <Route exact path="/addbattle" element={<AddBattle />} />
                <Route exact path="/allbattle" element={<AllBattle />} />
                <Route exact path="/edit/:id" element={<EditBattle />} />
                {/* // for adding coin to user  */}
                <Route
                  exact
                  path="/givecointouser"
                  element={<GiveCoinToUser />}
                />
                <Route exact path="/coinofuser" element={<Coinofuser />} />
                <Route exact path="/listedgame" element={<ListedGame />} />
                <Route
                  exact
                  path="/gameplayinput"
                  element={<GamePlayInput />}
                />
                <Route
                  exact
                  path="/waitingforcode"
                  element={<Waitingforcode />}
                />
                <Route exact path="/gameexpired" element={<GameExpired />} />
                <Route exact path="/startthegame" element={<StarttheGame />} />
                <Route
                  exact
                  path="/imageuploader"
                  element={<ImageUploader />}
                />
                <Route exact path="/superadmin" element={<SuperAdmin />} />
                <Route
                  exact
                  path="/superadmin/adminuserforgame"
                  element={<AdminUserForGame />}
                />
                <Route
                  exact
                  path="/superadmin/alladminplayer"
                  element={<AllAdminPlayer />}
                />
              </Routes>
            </BattleProvider>
          </TimerProvider>
        </AuthProvider>
      </SpinnerProvider>
  )
}
export default App
