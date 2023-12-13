import React, {useState} from "react";

export const DogContext = React.createContext({});

function DogContextProvider({ children }) {

    const [dogChoice, setDogChoice] = useState({});

    const dogData = {
        dogChoice,
        setDogChoice,
    }

return (
    <DogContext.Provider value={dogData}>
        {children}
    </DogContext.Provider>

)};

export default DogContextProvider;

