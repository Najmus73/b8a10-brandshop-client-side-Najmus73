import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";

export const AuthContext =createContext(null);

const googleLogin = new GoogleAuthProvider();

const AuthProvider = ({children}) =>{
    const [user, setUser] =useState(null);

    const registerUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const LogInUser = (email,password) =>{
           return signInWithEmailAndPassword(auth,email,password);
    }

    const LogInWithGoogle = () =>{
          return signInWithPopup(auth,googleLogin);
    }

    const logOut = () =>{
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {registerUser,LogInUser,LogInWithGoogle,logOut,user}

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