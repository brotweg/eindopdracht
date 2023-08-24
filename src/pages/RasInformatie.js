import './RasInformatie.css'
import IrishSetter from '../assets/Irish_setter.png'
import './Vragenlijst_1.css'
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../components/Context";
import axios from "axios";


function RasInformatie() {
    const navigate = useNavigate();
    const [dogContext, setDogContext] = useContext(Context);

    const [dogBreeds, setDogBreeds] = useState([]);
    const [breedInfoArray, setBreedInfoArray] = useState([]);
    const [foundDogBreed, setFoundDogBreed] = useState([]);

    async function fetchBreeds() {
        try {
            let allBreeds = [];
            for (let i = 0; i < 30; i++) {
                const result = await axios.get(`https://dogapi.dog/api/v2/breeds?page[number]=${i}`);
                const breedsData = result.data.data;
                allBreeds = [...allBreeds, ...breedsData];
            }
            setDogBreeds(allBreeds);

            const breedInfoArray = allBreeds.map((breed) => ({
                id: breed.id,
                name: breed.attributes.name,
                description: breed.attributes.description,
            }));
            setBreedInfoArray(breedInfoArray);
        } catch (e) {
            console.log(e);
        }
    }

    function findDog() {
        const foundBreed = breedInfoArray.find(breed => breed.name === dogContext);
        if (foundBreed) {
            setFoundDogBreed(foundBreed);
            console.log("Found breed:", foundBreed);
        } else {
            console.log("Breed not found");
        }
    }

    useEffect(() => {
        async function fetchData() {
            await fetchBreeds();
            if (breedInfoArray.length > 0) {
                findDog();

            }
        }
        fetchData();
    }, []);


    return (
        <>
            <div className="content_wrapper">
                <div className="vragenlijst_1">
                    <p>Jouw gekozen ras is: {dogContext}</p>
                    <p>{foundDogBreed.name}</p>
                    <p>{foundDogBreed.description}</p>
                    <button onClick={findDog}>KLik</button>


                    <button className="button_bottom" onClick={() => navigate('/vragenlijst_2')}>Ga Verder</button>
                </div>
                <img src={IrishSetter} className="irish_setter_image" alt="Irish Setter" />
            </div>

        </>
    )
}

export default RasInformatie;