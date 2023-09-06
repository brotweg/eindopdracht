import Pug from '../assets/Pug.png'
import './Vragenlijst_1.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useState} from "react";






function VragenlijstEen() {
    const navigate = useNavigate();
    const apiKey = 'OvzRvYsVHUUcIgk5PKl5Brg1I4eWGN7toxXd1mvk';

    const [dogData, setDogData] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [energy, setEnergy] = useState(1);
    const [protectiveness, setProtectiveness] = useState(1);
    const [trainability, setTrainability] = useState(1);


    async function fetchData(offset) {
        toggleLoading(true);
        for (let i = 1; i <= 10; i++) {
            try {
                const result = await axios.get('https://api.api-ninjas.com/v1/dogs',
                    {
                        params: {
                            energy: energy,
                            protectiveness: protectiveness,
                            trainability: trainability,
                            offset,
                        },
                        headers: {
                            'X-Api-Key': apiKey,
                        }
                    }
                );
                toggleLoading(false);

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

    console.log(dogData);

    function handleSliderChangeEnergy(e) {
        setEnergy(e.target.value);
    }

    function handleSliderChangeProtectiveness(e) {
        setProtectiveness(e.target.value);
    }

    function handleSliderChangeTrainability(e) {
        setTrainability(e.target.value);
    }

    function sliderTextEnergy(energy) {
        switch (energy) {
            case '1':
                return 'Lui';
            case '2':
                return 'Rustig';
            case '3':
                return 'Gemiddeld';
            case '4':
                return 'Redelijk actief';
            case '5':
                return 'Altijd druk';
            default:
                return '';
        }
    }

    function sliderTextProtectiveness(protectiveness) {
        switch (protectiveness) {
            case '1':
                return 'Allemansvriend';
            case '2':
                return 'Niet erg waakzaam';
            case '3':
                return 'Gemiddeld';
            case '4':
                return 'Redelijk waakzaam';
            case '5':
                return 'Bodyguard';
            default:
                return '';
        }
    }

    function sliderTextTrainability(trainability) {
        switch (trainability) {
            case '1':
                return 'Oost-Indisch doof';
            case '2':
                return 'Luistert als hij zin heeft';
            case '3':
                return 'Gemiddeld';
            case '4':
                return 'Redelijk goed te trainen';
            case '5':
                return 'Circushond';
            default:
                return '';
        }
    }

    return(
        <>
            <div className="content_wrapper">
                <div className="vragenlijst_1">
                    <h1>Jouw wensen</h1>
                    <form>
                        <section>
                            <label htmlFor="energy_slider">Hoe energiek mag de hond zijn?</label>
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
                            <label htmlFor="protectiveness_slider">Hoe waakzaam mag de hond zijn?</label>
                            <input
                                name="protectiveness"
                                id="protectiveness_slider"
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={protectiveness}
                                onChange={handleSliderChangeProtectiveness}
                            />
                            <span>{sliderTextProtectiveness(protectiveness)}</span>

                        </section>
                        <section>
                            <label htmlFor="trainability_slider">Hoe trainbaar moet de hond zijn?</label>
                            <input
                                name="trainability"
                                id="trainability_slider"
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={trainability}
                                onChange={handleSliderChangeTrainability}
                            />
                            <span>{sliderTextTrainability(trainability)}</span>

                        </section>

                        <button type="submit" onClick={handleClick} className="vragenlijst_1_button">Verzend</button>

                    </form>


                    {loading &&
                        <p>Aan het laden...</p>
                    }

                    {Object.keys(dogData).length > 0 && loading === false &&
                        <>
                            <ul className="dog_breed_list">
                                {dogData.map((dog, index) => (
                                    <>
                                        <li key={index}>
                                            <h3>{dog.name}</h3>
                                            <img src={dog.image_link}/>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </>
                    }
                    {Object.keys(dogData).length === 0 && loading === false &&
                        <>
                            <p>Er zijn helaas geen resultaten die aan jouw criteria voldoen.</p>
                        </>
                    }


                </div>
                <img src={Pug} className="pug_image" alt="Pug" />
                <button className="button_bottom" onClick={() => navigate('/vragenlijst_2')}>Ga Verder</button>
            </div>

        </>
    );
}

export default VragenlijstEen;