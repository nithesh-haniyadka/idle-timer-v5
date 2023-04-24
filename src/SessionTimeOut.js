import React, { useState, useRef ,useContext} from "react";
import IdleTimer from "react-idle-timer";
import SessionTimeoutDialog from "./SessionTimeoutDialog";
import AuthContext from "./context/AuthContext"


let countdownInterval;
let timeout = 1000 * 30 * 1; // to be in the idle state

const SessionTimeout = () => {
  const idleTimer = useRef(null);

  const login = {
    logged: true
  };

  const [timeoutModalOpen, setTimeoutModalOpen] = useState(false); //usestate to open the modal based on the condition
  const [timeoutCountdown, setTimeoutCountdown] = useState(0); // initialization of counter
  const { logout } = useContext(AuthContext); // 


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

    }
  };

  const clearSessionTimeout = () => { // to clear the time for the session
    clearTimeout(timeout);
  };

  const clearSessionInterval = () => { // to clear the session for the interval
    clearInterval(countdownInterval);
  };

  const handleLogout = () => { // function to logout automatically after time out and manual logout button click
    setTimeoutModalOpen(false);
    clearSessionInterval();
    clearSessionTimeout();
    logout();
    // alert("Logged Out");
  };

  const handleContinue = () => { // function to continue to stay in the same page.
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
