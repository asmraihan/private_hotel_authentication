import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth } from 'firebase/auth'


const AuthContext = createContext(null)

const auth = getAuth(app)

export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;