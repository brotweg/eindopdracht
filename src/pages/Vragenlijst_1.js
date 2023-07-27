import Pug from '../assets/Pug.png'
import './Vragenlijst_1.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useState} from "react";





function VragenlijstEen() {
    const navigate = useNavigate();
    const apiKey = 'OvzRvYsVHUUcIgk5PKl5Brg1I4eWGN7toxXd1mvk';

    const [dogData, setDogData] = useState({});
    const [shedding, setShedding] = useState(1);
    const [barking, setBarking] = useState(1);
    const [energy, setEnergy] = useState(1);

    async function fetchData(offset) {
        let moreDogData = [];
        for (let i = 1; i <= 10; i++) {
        try {
                const result = await axios.get('https://api.api-ninjas.com/v1/dogs',
                    {
                        params: {
                            shedding: shedding,
                            barking: barking,
                            energy: energy,
                            offset,

                        },
                        headers: {
                            'X-Api-Key': apiKey,
                        }
                    }
                );

            return result.data;

            } catch (e) {
                console.error(e);
            return [];
            }
        }
}


    function handleSliderChangeShedding(e){
        setShedding(e.target.value);
    }

    function handleSliderChangeBarking(e) {
        setBarking(e.target.value);
    }

    function handleSliderChangeEnergy(e) {
        setEnergy(e.target.value);
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

    return(
        <>
            <div className="content_wrapper">
                <div className="information">
                    <h1>Jouw wensen</h1>
                    <form>
                        <section>
                            <label htmlFor="shedding_slider">Hoeveel mag de hond uitharen?</label>
                            <input
                                name="shedding"
                                id="shedding_slider"
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={shedding}
                                onChange={handleSliderChangeShedding}
                            />
                            <span>{shedding}</span>

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
                            <span>{barking}</span>

                        </section>
                        <section>
                            <label htmlFor="barking_slider">Hoe energiek mag de hond zijn?</label>
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
                            <span>{energy}</span>

                        </section>
                       <button type="submit" onClick={handleClick}>Verzend</button>
                    </form>


      {Object.keys(dogData).length > 0 &&
          <>
              Je hebt gezocht op:
              <ul>
                  {dogData.map((dog, index) => (
                      <li key={index}>{dog.name}</li>
                  ))}
              </ul>
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