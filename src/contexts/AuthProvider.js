import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    // Email login
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Google login
    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Facebook Login
    const fbSignUp = () => {
        return signInWithPopup(auth, fbProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = { user, loading, createUser, googleSignUp, fbSignUp };

    return (
        <div className='auth-provider'>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;