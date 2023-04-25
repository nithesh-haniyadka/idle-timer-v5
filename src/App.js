import SessionTimeout from "./SessionTimeOut";
import { useState } from "react";
import AuthContext from "./context/AuthContext"
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import LoginNew from "./Components/LoginPageNew";
import NavBar from "./Components/NavBar";


const App = () => {

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  const logout = () => {
    setauthstatus(false);
  };
  return (

    <Router>
      <AuthContext.Provider value={{ status: authstatus, login: login, logout: logout }}>

        {authstatus ? <>
          <NavBar />
          <SessionTimeout />
          <HomePage />
        </> : <LoginNew />}
      </AuthContext.Provider>


    </Router>


  )
}
export default App;