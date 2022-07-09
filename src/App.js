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
// import Home from "./components/layout/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await axios.get("/api/user/register");
  //       var message = data.data.message;
  //       console.log("mrityunjay", message);
  //     } catch (e) {
  //       console.log("balajee", e);
  //     }
  //   }
  //   fetchData();
  // }, []);
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

            <Route exact path="/addbattle" element={<AddBattle />} />
            <Route exact path="/allbattle" element={<AllBattle />} />
          </Routes>
        </BattleProvider>
      </AuthProvider>
    </Router>
  );
};
export default App;
