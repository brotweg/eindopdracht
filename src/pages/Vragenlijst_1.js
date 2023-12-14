import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';
import { DogContext } from '../components/DogContext';
import Pug from '../assets/Pug.png';
import ShiTzu from '../assets/shitzu.png';
import styles from './Vragenlijst_1.module.css';
import '../index.css';

function VragenlijstEen() {
    const navigate = useNavigate();
    const apiKey = process.env.REACT_APP_API_KEY;

    const [dogData, setDogData] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [energy, setEnergy] = useState(1);
    const [playfulness, setPlayfulness] = useState(1);
    const [barking, setBarking] = useState(1);
    const { dogChoice, setDogChoice } = useContext(DogContext);

    async function fetchData(offset) {
        toggleLoading(true);
        for (let i = 1; i <= 10; i++) {
            try {
                const result = await axios.get(
                    'https://api.api-ninjas.com/v1/dogs',
                    {
                        params: {
                            energy: energy,
                            playfulness: playfulness,
                            barking: barking,
                            offset,
                        },
                        headers: {
                            'X-Api-Key': apiKey,
                        },
                    }
                );
                toggleLoading(false);
                console.log(result.data);

                return result.data;
            } catch (e) {
                console.error(e);
                toggleLoading(false);
            }
        }
    }

    async function handleClick(e) {
        e.preventDefault();
        try {
            const resultsPerPage = 20; // Number of results per page
            let offset = 0;
            let moreDogData = [];

            while (true) {
                const result = await fetchData(offset);
                if (result.length === 0) break; // No more data, exit the loop
                moreDogData = moreDogData.concat(result);
                offset += resultsPerPage;
            }
            setDogData(moreDogData);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSliderChangeEnergy(e) {
        setEnergy(e.target.value);
    }

    function handleSliderChangePlayfulness(e) {
        setPlayfulness(e.target.value);
    }

    function handleSliderChangeBarking(e) {
        setBarking(e.target.value);
    }

    function sliderTextEnergy(energy) {
        switch (energy) {
            case '1':
                return 'Lazy';
            case '2':
                return 'Calm';
            case '3':
                return 'Moderate';
            case '4':
                return 'Active';
            case '5':
                return 'Hyper';
            default:
                return '';
        }
    }

    function sliderTextPlayfulness(playfulness) {
        switch (playfulness) {
            case '1':
                return 'Serious';
            case '2':
                return 'Reserved';
            case '3':
                return 'Moderate';
            case '4':
                return 'Jovial';
            case '5':
                return 'Clownish';
            default:
                return '';
        }
    }

    function sliderTextBarking(barking) {
        switch (barking) {
            case '1':
                return 'Quiet';
            case '2':
                return 'Hushed';
            case '3':
                return 'Moderate';
            case '4':
                return 'Vocal';
            case '5':
                return 'Boisterous';
            default:
                return '';
        }
    }

    function handleClickResults(dog) {
        console.log(dog);
        setDogChoice(dog);
        navigate('/ras_informatie');
    }

    return (
        <>
            <div className={styles['page_wrapper']}>
                <div className={styles['inner_wrapper']}>
                    <h1>Your perfect dog</h1>
                    <form>
                        <section>
                            <label htmlFor="energy_slider">Energy level:</label>
                            <br />
                            <input
                                name="energy"
                                id="energy_slider"
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={energy}
                                onChange={handleSliderChangeEnergy}
                            />
                            <span>{sliderTextEnergy(energy)}</span>
                        </section>
                        <section>
                            <label htmlFor="playfulness_slider">Playfulness:</label>
                            <br />
                            <input
                                name="playfulness"
                                id="playfulness_slider"
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={playfulness}
                                onChange={handleSliderChangePlayfulness}
                            />
                            <span>{sliderTextPlayfulness(playfulness)}</span>
                        </section>
                        <section>
                            <label htmlFor="barking_slider">Vocalization level:</label>
                            <br />
                            <input
                                name="barking"
                                id="barking_slider"
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={barking}
                                onChange={handleSliderChangeBarking}
                            />
                            <span>{sliderTextBarking(barking)}</span>
                        </section>

                        <button type="submit" onClick={handleClick}>
                            Verzend
                        </button>
                    </form>

                    {loading && <p>Loading...</p>}

                    {Object.keys(dogData).length > 0 && loading === false && (
                        <>
                            <ul className={styles['dog_breed_list']}>
                                {dogData.map((dog) => (
                                    <li key={dog.name} onClick={() => handleClickResults(dog)}>
                                        <h3>{dog.name}</h3>
                                        <img src={dog.image_link} alt={dog.name} />
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {Object.keys(dogData).length === 0 && loading === false && (
                        <>
                            <p>
                                Unfortunately, the dog you're looking for doesn't exist. Please
                                note that most dogs have a lot of energy.
                            </p>
                        </>
                    )}
                </div>
                <div className={styles['dog']}>
                    <img src={Pug} className={styles['dog--pug']} alt="Pug" />
                    <img src={ShiTzu} className={styles['dog--shitzu']} alt="ShiTzu" />
                </div>
            </div>
        </>
    );
}

export default VragenlijstEen;
