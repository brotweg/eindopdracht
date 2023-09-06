import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {Context} from "./Context";

function BreedInfo() {
    const [dogChoice, setDogChoice] = useContext(Context);
    const [dogBreeds, setDogBreeds] = useState([]);
    const [breedInfoArray, setBreedInfoArray] = useState([]);
    const [foundDogBreed, setFoundDogBreed] = useState([]);
    const [loading, toggleLoading] = useState(false);

    async function fetchBreeds() {
        toggleLoading(true);
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

            const foundBreed = breedInfoArray.find(breed => breed.name === dogChoice.name);
            if (foundBreed) {
                setFoundDogBreed(foundBreed);
                console.log("Found breed:", foundBreed);
            } else {
                console.log("Breed not found");
            }
            toggleLoading(false)


        } catch (e) {
            console.log(e);

        }
    }

    useEffect(() => {
        fetchBreeds();
    }, []);



    return (
        <>
           <div className="information">
                    {loading &&
                        <p>Aan het laden...</p>
                    }
                    {loading === false && (
                        <>
                        <h2>{dogChoice.name}</h2>
                        <img src={dogChoice.image_link} alt={dogChoice.name} />
                        <p>{foundDogBreed.description}</p>
                        </>
                    )}
           </div>
        </>
    );
}

export default BreedInfo;