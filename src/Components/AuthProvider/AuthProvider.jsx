import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../FireBase/Firebase.config";

export const AuthContext =createContext(null)

const AuthProvider = ({children}) =>{

    const registerUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const LogInUser = (email,password) =>{
           return signInWithEmailAndPassword(auth,email,password)
    }

    
    const authInfo = {registerUser,LogInUser}

    return(
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    )
}

export default AuthProvider;