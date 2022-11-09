import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'

const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider()




    //google Log in
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //save user in auth
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            subscribe()
        }
    }, [])

    const authInfo = { user, setUser, googleLogIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };