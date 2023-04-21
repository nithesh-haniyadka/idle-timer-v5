import { useState, useContext } from "react";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";
// import useIdle from "../hooks/useIdleTimeOut"
import AuthContext from "../context/AuthContext"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import FirstSearchComponent from "./FirstSearchComponent";
import SecondSearchComponent from "./SecondSearchComponent";
import { useEffect } from "react";





const HomePage = () => {
    const navigate = useNavigate();
  const navigateToSecondSearch = () => {
    // 👇️ navigate to /contacts
    navigate('/secondsearch');
  };

  const navigatetoFirstSearch = () => {
    // 👇️ navigate to /
    navigate('/firstsearch');
  };

    // const [openModal, setOpenModal] = useState(false)
    const { logout } = useContext(AuthContext);
    // const [timeVal, setTimeVal] = useState(null);


    // const handleIdle = () => {
    //     setOpenModal(true);
    // }
    // const { idleTimer } = useIdle({ onIdle: handleIdle, idleTime: 5 });

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimeVal(idleTimer.getRemainingTime  );
    //     }, 1000);
    // }, []);

    // console.log("remaining",timeVal /60 /60 );
    // const stay = () => {
    //     setOpenModal(false)
    //     idleTimer.reset()
    // }

    // const handleLogout = () => {
    //     logout()
    //     setOpenModal(false)
    // }

    return <Container className="mt-4">

        <Row>
            <Col></Col>
            <Col>You are now logged in </Col>
            <Col></Col>
        </Row>
        <button onClick={navigatetoFirstSearch}>Search1</button>
        <hr />
        <button onClick={navigateToSecondSearch}>Search2</button>

    <Routes>
          <Route path="/secondsearch" element={<SecondSearchComponent />} />
          <Route path="/firstsearch" element={<FirstSearchComponent />} />
        </Routes>

        
        
        {/* <Modal show={openModal} onHide={stay}>
            <Modal.Header closeButton>
                <Modal.Title>Your session is about to expire</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Your session is about to expire. {timeVal} You'll be automatically signed out.
                </p>
                <p>
                    Do you want to stay signed in?
                </p>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleLogout}>
                    Sign out now
                </Button>
                <Button variant="primary" onClick={stay}>
                    Stay signed in
                </Button>
            </Modal.Footer>
        </Modal> */}
    </Container>
}

export default HomePage;