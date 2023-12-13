import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DogContext } from '../components/DogContext';
import BreedInfo from '../components/BreedInfo';
import styles from './RasInformatie.module.css';
import '../index.css';
import Greyhound from '../assets/Greyhound.png';


import Header from '../components/Header';

function RasInformatie() {
    const navigate = useNavigate();
    const { dogContext, setDogContext } = useContext(DogContext);

    return (
        <>
            <div className={styles['page_wrapper']}>
                <div className={styles['inner_wrapper']}>
                    <BreedInfo />
                </div>
                <div className={styles.dog}>
                    <img src={Greyhound} className={styles['dog--greyhound']} alt="Greyhound" />
                    <button className={styles['continue_button']} onClick={() => navigate('/vragenlijst_2')}>
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
}

export default RasInformatie;
