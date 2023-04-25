import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstSearchComponent from "./FirstSearchComponent";
import ThirdSearch from "../Components/API_FETCH/ThirdSearchComponent"



const HomePage = () => {
  return <Container className="mt-4">
    <Row>
      <Col></Col>
      <h1 style={{ color: "black", textAlign: "center" }}> Welcome to Demo Project</h1>
      <Col></Col>
    </Row>

    <Routes>
      <Route path="/secondsearch" element={<ThirdSearch />} />
      <Route path="/firstsearch" element={<FirstSearchComponent />} />
    </Routes>
  </Container>
}

export default HomePage;