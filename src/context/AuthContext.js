import { createContext } from "react"

const AuthContext = createContext({ status: null, login: () => { }, logout: () => { } }); //Store the user's information in the context and provides the implementation for authenticating users.
export default AuthContext