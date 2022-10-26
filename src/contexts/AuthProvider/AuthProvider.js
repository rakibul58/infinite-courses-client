import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);

    const googleProviderLogin = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
        });

        return () =>{
            unsubscribe();
        }

    })

    const authInfo = {
        googleProviderLogin,
        logOut,
        user,
        createUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;