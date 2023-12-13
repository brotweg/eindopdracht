import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import AuthContextProvider from "./components/AuthContext.js"
import DogContextProvider from "./components/DogContext.js"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <DogContextProvider>
                <Router>
                    <App />
                </Router>
            </DogContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);


