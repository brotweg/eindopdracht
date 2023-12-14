import React, { useContext } from "react";
import ChowChow from "../assets/ChowChow.png";
import styles from './Uitleg.module.css';
import { DogContext } from '../components/DogContext';
import { useNavigate } from "react-router-dom";


function Uitleg() {
    const { dogChoice } = useContext(DogContext);
    const navigate = useNavigate();

    return (
        <>
            <div className={styles['page_wrapper']}>
                <div className={styles['inner_wrapper']}>
                    <h1>Instructions</h1>
                    <p>To begin, specify your expectations for your new canine companion. Is he playful or more on the serious side? Does he tend to bark a lot? Is he vigilant and watchful? Does he prefer lounging on the couch with you to running and playing on the beach?</p>
                    <p>Based on your responses, a selection is made from a pool of over a hundred dog breeds. Once you've settled on a breed that captures your interest, you'll be asked a series of questions about your own circumstances. Do you have the necessary space and time to accommodate this particular breed?</p>
                    <p>Take the quiz and discover whether your preferred breed matches with your lifestyle.</p>
                    <button className={styles['start_button']} onClick={() => navigate('/vragenlijst_1')}>Start</button>
                </div>
                <div className={styles['dog']}>
                    <img src={ChowChow} className={styles['dog--chow']} alt="Chow Chow" />
                </div>
            </div>
        </>
    );
}

export default Uitleg;