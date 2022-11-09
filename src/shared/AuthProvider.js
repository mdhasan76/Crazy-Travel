import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider()




    //google Log in
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //create new user 
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logIn User
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    //update Profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    //Log Out 
    const logOut = () => {
        return signOut(auth)
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

    const authInfo = { user, setUser, googleLogIn, createNewUser, logIn, updateUserProfile, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };