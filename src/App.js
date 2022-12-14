import React, { useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import OneSignal from "react-onesignal"
// Contexts...
import { AuthProvider } from "./components/context/authContext"
import { BattleProvider } from "./components/context/battleContext"
import { SpinnerProvider } from "./components/context/spinnerContext"
import { TimerProvider } from "./components/context/timerContext"
// Components...
import MainNavigation from "./components/layout/MainNavigation"
import SignUp from "./components/user/Signup"
import LogIn from "./components/user/Login"
import Spinner from "./components/loader/Spinner"
import AddBattle from "./components/adminControl/AddBattle"
import AllBattle from "./components/adminControl/AllBattle"
import EditBattle from "./components/adminControl/EditBattle"
import GiveCoinToUser from "./components/adminControl/GiveCointouser"
import Coinofuser from "./components/adminControl/CoinofUser"
import ListedGame from "./components/playgame/ListedGame"
import GamePlayInput from "./components/playgame/GamePlayInput"
import Waitingforcode from "./components/playgame/Waitingforcode"
import GameExpired from "./components/playgame/GameExpired"
import ImageUploader from "./components/aftergame/ImageUploader"
import StarttheGame from "./components/playgame/StarttheGame"
import SuperAdmin from "./components/superadmin/SuperAdmin"
import AdminUserForGame from "./components/superadmin/AdminUserForGame"
import AllAdminPlayer from "./components/superadmin/AllAdminPlayer"
import Home from "./components/user/Home"
import AuthenticatedRoutes from "./components/AuthenticatedRoutes"
import AdminRoutes from "./components/AdminRoutes"
import Profile from "./components/user/Profile"
import Payment from "./components/payment"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "reactstrap"

const App = () => {
  
  // useEffect(() => {
  //   window.OneSignal = window.OneSignal || []
  //   OneSignal.init({
  //     appId: process.env.REACT_APP_ONE_SIGNAL_ID || "",
  //   })
  // }, [])

  return (
    <SpinnerProvider>
      <AuthProvider>
        <TimerProvider>
          {/* Static component */}
          <MainNavigation />
          <Spinner />
          <Profile />
          <Payment />
          {/* Routing component */}
          {/* {["/", "/home"]} */}
          <BattleProvider>
            <Container
              fluid
              className="d-flex flex-column justify-content-center mt-3"
            >
              <Routes>
                <Route exact path="/" element={<Navigate to={"/home"} />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<LogIn />} />
                {/* Only authenticated users can visit these pages. */}
                <Route element={<AuthenticatedRoutes />}>
                  <Route element={<AdminRoutes />}>
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
                  </Route>
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
                  <Route
                    exact
                    path="/startthegame"
                    element={<StarttheGame />}
                  />
                  <Route
                    exact
                    path="/imageuploader"
                    element={<ImageUploader />}
                  />
                </Route>
              </Routes>
            </Container>
          </BattleProvider>
        </TimerProvider>
      </AuthProvider>
    </SpinnerProvider>
  )
}
export default App
