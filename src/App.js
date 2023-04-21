// import "./styles.css";
import Login from "./Components/LoginPage"

import SessionTimeout from "./SessionTimeOut";
import { useState } from "react";
import AuthContext from "./context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage";


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
    {/* <NavigationBar /> */}
    <SessionTimeout/>
    <HomePage />
  </> : <Login />}
</AuthContext.Provider>


</Router>

    
)
}
export default App;