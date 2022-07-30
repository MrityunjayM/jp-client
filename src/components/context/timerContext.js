import React, { createContext, useState } from "react";

export const timerContext = createContext();
const { Provider } = timerContext;

export const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(3);
  //   const [second, setSecond] = useState(60);
  //   useEffect(() => {
  //     timerStart();
  //   }, []);
  //   const timerStart = () => {
  //     let x = 0;
  //     const intervalId = setInterval(() => {
  //       if (second == 0) {
  //         console.log("sakshiiiiii");
  //         setTimer(timer - 1);
  //         setSecond(60);
  //         x = 0;
  //       }
  //       // applied this too..
  //       // nothing seems to work
  //       if (second < 0) {
  //         setTimer(timer - 1);
  //         setSecond(60);
  //         x = 0;
  //       }
  //       x = x + 1;
  //       setSecond(second - x);
  //       if (x == 1 && timer == 3) {
  //         setTimer(timer - 1);
  //       }
  //     }, 1000);
  //   };
  return <Provider value={{timer, setTimer}}>{children}</Provider>;
  // }
};
