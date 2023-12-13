import React, { useState, useEffect } from "react";
import { createContext } from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        isAuth: false,
        status: 'pending',
    })

    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');

        if (storedToken) {
            const decodedToken = jwt_decode(storedToken);

            setAuthState({
                isAuth: true,
                status: 'done',
            });
            setUserName(decodedToken.sub);
        } else {
            setAuthState({
                isAuth: false,
                status: 'done',
            });
        }
    }, []);

    function logIn(accessToken) {
        localStorage.setItem('accessToken', accessToken);
        setAuthState((prevState) => ({
            ...prevState,
            isAuth: true,
        }));

        async function getUser() {
            try {
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    },
                });
                console.log(result);
                setUserName(result.data.username);

            } catch (e) {
                console.error(e);
            }
        }
        getUser();
    }

    function logOut() {
        localStorage.removeItem("accessToken");
        setAuthState((prevState) => ({
            ...prevState,
            isAuth: false,
        }));
        setUserName('');
    }

    const data = {
        ...authState,
        userName,
        login: logIn,
        logout: logOut,
    };

    console.log(authState);

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;