import Pug from '../assets/Pug.png'
import './Vragenlijst_1.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useContext, useState} from "react";
import {Context} from "../components/Context";







function VragenlijstEen() {
    const navigate = useNavigate();
    const apiKey = 'OvzRvYsVHUUcIgk5PKl5Brg1I4eWGN7toxXd1mvk';

    const [dogData, setDogData] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [energy, setEnergy] = useState(1);
    const [playfulness, setPlayfulness] = useState(1);
    const [barking, setBarking] = useState(1);
    const [dogChoice, setDogChoice] = useContext(Context);


    async function fetchData(offset) {
        toggleLoading(true);
        for (let i = 1; i <= 10; i++) {
            try {
                const result = await axios.get('https://api.api-ninjas.com/v1/dogs',
                    {
                        params: {
                            energy: energy,
                            playfulness: playfulness,
                            barking: barking,
                            offset,
                        },
                        headers: {
                            'X-Api-Key': apiKey,
                        }
                    }
                );
                toggleLoading(false);
                console.log(result.data)

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

    function sliderTextPlayfulness(playfulness) {
        switch (playfulness) {
            case '1':
                return 'Serieus';
            case '2':
                return 'Niet erg speels';
            case '3':
                return 'Gemiddeld';
            case '4':
                return 'Grappenmaker';
            case '5':
                return 'Clown';
            default:
                return '';
        }
    }

    function sliderTextBarking(barking) {
        switch (barking) {
            case '1':
                return 'Stil als een muis';
            case '2':
                return 'Blaft af en toe';
            case '3':
                return 'Gemiddeld';
            case '4':
                return 'Vrij luid';
            case '5':
                return 'Herrieschopper';
            default:
                return '';
        }
    }

    function handleClickResults(dog) {
        console.log(dog);
        setDogChoice(dog);
        navigate('/ras_informatie');

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
                            <label htmlFor="playfulness_slider">Hoe speels mag de hond zijn?</label>
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
                            <label htmlFor="barking_slider">Hoeveel mag de hond blaffen?</label>
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

                        <button type="submit" onClick={handleClick} className="vragenlijst_1_button">Verzend</button>

                    </form>


                    {loading &&
                        <p>Aan het laden...</p>
                    }

                    {Object.keys(dogData).length > 0 && loading === false &&
                        <>
                            <ul className="dog_breed_list">
                                {dogData.map((dog) => (
                                    <li key={dog.name} onClick={() => handleClickResults(dog)}>
                                        <h3>{dog.name}</h3>
                                        <img src={dog.image_link} alt={dog.name} />
                                    </li>
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

            </div>

        </>
    );
}

export default VragenlijstEen;