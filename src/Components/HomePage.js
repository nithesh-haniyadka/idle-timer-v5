import { useState, useContext } from "react";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";
// import useIdle from "../hooks/useIdleTimeOut"
import AuthContext from "../context/AuthContext"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import FirstSearchComponent from "./FirstSearchComponent";
import SecondSearchComponent from "./SecondSearchComponent";
import ThirdSearch from "../Components/API_FETCH/ThirdSearchComponent"
import { useEffect } from "react";


const HomePage = () => {
    const navigate = useNavigate();
  const navigateToSecondSearch = () => {
    // navigate to /secondsearch
    navigate('/secondsearch');
  };

  const navigatetoFirstSearch = () => {
    // navigate to /firstsearch
    navigate('/firstsearch');
  };

    const { logout } = useContext(AuthContext);

    return <Container className="mt-4">

        <Row>
            <Col></Col>
            <h1 style={{color:"black",textAlign:"center"}}> Welcome to Demo Project</h1>
            <Col></Col>
        </Row>
        {/* <h1 style={{color:"black",textAlign:"center"}}>  <button onClick={navigatetoFirstSearch}>Clothes</button></h1>
        {/* <hr /> */}
        {/* <h1 style={{color:"black",textAlign:"center"}}>  <button onClick={navigateToSecondSearch}>Countries</button></h1>         */}

    <Routes>
          <Route path="/secondsearch" element={<ThirdSearch />} />
          <Route path="/firstsearch" element={<FirstSearchComponent />} />
        </Routes>
    </Container>
}

export default HomePage;