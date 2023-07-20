import Pug from '../assets/Pug.png'
import './Vragenlijst_1.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useState} from "react";





function VragenlijstEen() {
    const navigate = useNavigate();
    const name = 'golden retriever';
    const apiKey = 'OvzRvYsVHUUcIgk5PKl5Brg1I4eWGN7toxXd1mvk';
    const config = {
        headers:{
            'X-Api-Key': apiKey,
        }
    };
    const [dogData, setDogData] = useState({});

    async function fetchData() {
        try {
            const result = await axios.get('https://api.api-ninjas.com/v1/dogs?name=' + name, config);
            console.log(result);
            setDogData(result.data);
        } catch(e) {
            console.error(e);
        }
    }

    Object.keys(dogData).length > 0 && console.log(dogData[0].name)

    return(
        <>
            <div className="content_wrapper">
                <div className="information">
                    <h1>Jouw wensen</h1>
                    <button
                        type="button"
                        onClick={fetchData}
                    >
                        Haal data op!
                    </button>
                        <span>
      {Object.keys(dogData).length > 0 &&
          <>
              <h2>{dogData[0].name}</h2>

          </>
      }
    </span>
                    Je hebt gezocht op: {dogData.name}
                </div>
                <img src={Pug} className="pug_image" alt="Pug" />
                <button className="button_bottom" onClick={() => navigate('/vragenlijst_2')}>Ga Verder</button>
            </div>

        </>
    );
}

export default VragenlijstEen;