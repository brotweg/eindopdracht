import axios from "axios";
import {useEffect, useState} from "react";



function BreedInfo() {
    const [dogBreeds, setDogBreeds] = useState([]);
    const [breedInfoArray, setBreedInfoArray] = useState([]);

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
            console.log(breedInfoArray)

            } catch (e) {
                console.log(e);
            }
        }


    useEffect(() => {
        fetchBreeds();
    }, []);

}

export default BreedInfo;







