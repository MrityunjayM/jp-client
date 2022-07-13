import React, { useRef, useContext } from "react";
import { authContext } from "../context/authContext";
// import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'
import classes from "./SignUp.module.css";

const LogIn = () => {
  const { SignIn } = useContext(authContext);
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
        <div className={classes.form_control}>
          <input
            type="password"
            required
            placeholder="Password"
            ref={password}
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
