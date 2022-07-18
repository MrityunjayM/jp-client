import React, { useRef, useContext } from "react";
import { authContext } from "../context/authContext";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";
// import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'
import classes from "./SignUp.module.css";

const LogIn = () => {
  const { SignIn, isRevealPwd, setIsRevealPwd } = useContext(authContext);
  const phoneInputRef = useRef();
  const password = useRef();
  async function submitHandler(event) {
    try {
      event.preventDefault();
      const phoneInput = phoneInputRef.current.value;
      const passwordValue = password.current.value;
      await SignIn(phoneInput, passwordValue);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className={classes.SignUp}>
      <form className={classes.form_one} onSubmit={submitHandler}>
        <div className={classes.form_control}>
          <input
            type="number"
            required
            placeholder="Phone"
            ref={phoneInputRef}
          />
        </div>
        <div className={classes.pwd_container}>
          <input
            type={isRevealPwd ? "text" : "password"}
            required
            placeholder="Password"
            ref={password}
          />
          <img
            title={isRevealPwd ? "Hide password" : "Show password"}
            src={isRevealPwd ? hidePwdImg : showPwdImg}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
        </div>
        <div className={classes.form_control}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
