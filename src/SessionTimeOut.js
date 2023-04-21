import React, { useState, useRef ,useContext} from "react";
import IdleTimer from "react-idle-timer";
import SessionTimeoutDialog from "./SessionTimeoutDialog";
import AuthContext from "./context/AuthContext"


let countdownInterval;
let timeout = 1000 * 30 * 1;// 30 seconds i am in idle state by default set 

const SessionTimeout = () => {
  const idleTimer = useRef(null);

  const login = {
    logged: true
  };

  const [timeoutModalOpen, setTimeoutModalOpen] = useState(false);
  const [timeoutCountdown, setTimeoutCountdown] = useState(0);
  const { logout } = useContext(AuthContext);


  const onActive = () => {
    // timer reset automatically.
    if (!timeoutModalOpen) {
      clearSessionInterval(); 
      clearSessionTimeout();
    }
  };

  const onIdle = () => {
    const delay = 1000 * 1; // in order to display the pop up
    console.log("delay",delay);

    if (login.logged && !timeoutModalOpen) { // based on this we will be checking the condition whether we logged in and timeoutModal is not opened.
      timeout = setTimeout(() => { // timer to identify the ideal condition // usage time+ 30 sec to get the pop up
        let countDown = 60;
        setTimeoutModalOpen(true);
        setTimeoutCountdown(countDown);
        countdownInterval = setInterval(() => {
          if (countDown > 0) {
            setTimeoutCountdown(--countDown);
          } else {
            handleLogout();
          }
        }, 1000);
      }, delay);
      console.log("timeout",timeout);

    }
  };

  const clearSessionTimeout = () => {
    clearTimeout(timeout);
  };

  const clearSessionInterval = () => {
    clearInterval(countdownInterval);
  };

  const handleLogout = () => {
    setTimeoutModalOpen(false);
    clearSessionInterval();
    clearSessionTimeout();
    logout();
    // alert("Logged Out");
  };

  const handleContinue = () => {
    setTimeoutModalOpen(false);
    clearSessionInterval();
    clearSessionTimeout();
  };

  return (
    <>
      <IdleTimer
        ref={idleTimer}
        onActive={onActive}
        onIdle={onIdle}
        debounce={250}
        timeout={timeout}
      />
      <SessionTimeoutDialog
        countdown={timeoutCountdown}
        onContinue={handleContinue}
        onLogout={handleLogout}
        open={timeoutModalOpen}
      />
    </>
  );
};

export default SessionTimeout;
