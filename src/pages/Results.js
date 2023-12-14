import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DogContext } from '../components/DogContext';
import styles from './Results.module.css';
import '../index.css';
import Golden from '../assets/Golden_retriever.png';
import Beagle from '../assets/Beagle.png';
import Staffordshire from '../assets/Staffordshire.png';


function Results() {
    const { dogChoice, setDogChoice } = useContext(DogContext);
    const navigate = useNavigate();

    console.log(dogChoice);

    return (
        <>
            <div className={styles['page_wrapper']}>
                <div className={styles['inner_wrapper']}>
                    <h1>Results</h1>
                    <section>
                        {dogChoice.overallMatch && <p>It's a match!</p>}
                        {!dogChoice.overallMatch && <p>Unfortunately, it's no match.</p>}
                    </section>
                    <section className={styles['results']}>
                        <p>Here are some key points to keep in mind:</p>
                        <ul>
                            <li>{dogChoice.matchEnergy}</li>
                            <li>{dogChoice.matchHousing}</li>
                            <li>{dogChoice.matchPlayfulness}</li>
                        </ul>
                    </section>
                </div>
                <div className={styles.dog}>
                    <img src={Beagle} className={styles['dog--beagle']} alt="Beagle" />
                    <img src={Golden} className={styles['dog--golden']} alt="Golden Retriever" />
                    <img src={Staffordshire} className={styles['dog--stafford']} alt="Staffordshire" />
                    {dogChoice.overallMatch && (
                        <div className={styles['see_you_soon']}>
                            <img src={dogChoice.image_link} className={styles['round_image']} alt="Your chosen dog" />
                        </div>
                    )}
                </div>
                <button className={styles['restart_button']} onClick={() => navigate('/vragenlijst_1')}>
                    Try again?
                </button>
            </div>
        </>
    );
}

export default Results;
