import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { Container } from "react-bootstrap";
import withWidth from "material-ui/utils/withWidth";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = async e => {
        e.preventDefault()
        login();
    };

    return <Container className="mt-5">
        <h1 style={{color:"black",textAlign:"center"}}> Login</h1>
        <p style={{color:"orange",textAlign:"center"}}>Please enter your Name and Password</p>
        <form onSubmit={handleLogin}>
            <p style={{color:"black",textAlign:"center"}} >Enter Name <input type="text" /></p>
            
            <p style={{color:"black",textAlign:"center"}}> Password <input type="password" /></p>
            
            <div style={{color:"orange",textAlign:"center"}} >
                <button type="submit">
                   <p > Login</p>
                </button>
            </div>
        </form>
    </Container>
}



export default Login;