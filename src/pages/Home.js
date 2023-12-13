import React, {useContext} from "react";
import styles from './Home.module.css';
import '../index.css';
import {useNavigate} from "react-router-dom";
import Collie from "../assets/Collie.png";
import Bernes_mountain_dog from "../assets/Bernes_mountain_dog.png";
import {AuthContext} from "../components/AuthContext";

function Home() {

    const navigate = useNavigate();
    const {isAuth} = useContext(AuthContext);


    return (
        <>
        <div className={styles['page_wrapper']}>
            <div className={styles['inner_wrapper']}>
                <h1>What kind of dog breed suits you?</h1>
                <p>As a prospective dog owner, you're faced with the daunting task of choosing from hundreds of dog breeds. Making the right choice is crucial, and you don't want to act impulsively. However, sometimes, the sheer number of options can be overwhelming. That's where Dogmatch.nl comes in. It aims to assist future dog owners by helping them filter through the choices to find the perfect fit for their situation.</p>
                <p>You'll be asked a few brief questions to outline your expectations for your future dog. Additionally, there will be questions about what the dog would expect from you. By answering these questions, you'll be able to determine if there's a match between your preferences and the dog's needs.</p>
                <p>Login or create an account to start!</p>
                <span>
                    <button onClick={ ()=> navigate('/inloggen')}>Login</button>
                    <button onClick={ () => navigate('/registreren')}>Create account</button>
                    {isAuth && (
                        <button onClick={ () => navigate('/uitleg')}>Read instructions</button>
                        )}
                </span>
            </div>

                <div className={styles['dog']}>
                    <img  alt="Collie" src={Collie} className={styles['dog--collie']}/>
                    <img  alt="Bernese mountain dog" src={Bernes_mountain_dog} className={styles['dog--bernese']}/>
                </div>
        </div>

            </>
    );
}

export default Home;