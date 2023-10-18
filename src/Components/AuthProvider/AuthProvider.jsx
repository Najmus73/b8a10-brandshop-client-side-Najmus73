import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../FireBase/Firebase.config";

export const AuthContext =createContext(null)

const googleLogin = new GoogleAuthProvider();

const AuthProvider = ({children}) =>{

    const registerUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const LogInUser = (email,password) =>{
           return signInWithEmailAndPassword(auth,email,password);
    }

    const LogInWithGoogle = () =>{
          return signInWithPopup(auth,googleLogin);
    }

    const authInfo = {registerUser,LogInUser,LogInWithGoogle}

    return(
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    )
}

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}