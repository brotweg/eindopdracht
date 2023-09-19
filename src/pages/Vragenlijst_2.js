import {Context} from "../components/Context";
import Schnauzer from "../assets/Schnauzer.png"
import {useContext, useState} from "react";
import './Vragenlijst_2.css';


function VragenlijstTwee() {

    const [dogChoice, setDogChoice] = useContext(Context);
    const [walkies, setWalkies] = useState(1);
    const [home, setHome] = useState(1);
    const [house, setHouse] = useState(1);
    const [match, toggleMatch] = useState(false);
    const {
        energy,
        good_with_other_dogs,
        trainability,
        playfulness,
        barking,
        protectiveness,
        max_weight_female,
        } = dogChoice;

    function handleSliderChangeWalkies(e) {
        setWalkies(e.target.value);
    }

    function handleSliderChangeHome(e) {
        setHome(e.target.value);
    }

    function handleSliderChangeHouse(e) {
        setHouse(e.target.value);
    }

    function sliderTextWalkies(walkies) {
        switch (walkies) {
            case '1':
                return 'Never';
            case '2':
                return 'Sometimes';
            case '3':
                return 'Three times a  day';
            case '4':
                return 'Three times a day, with at least one 1-hour walk';
            case '5':
                return 'My dog will be out with me ALL DAY';
            default:
                return '';
        }
    }

    function sliderTextHome(home) {
        switch (home) {
            case '1':
                return `I'm never at home`;
            case '2':
                return `I'm not at home often, but the dog will have toys`;
            case '3':
                return `I'm at home regularly to play with my dog`;
            case '4':
                return `There's always at least one family member at home to keep the dog company`;
            case '5':
                return `My dog will have it's own agility course in the backyard!`;
            default:
                return '';
        }
    }

    function sliderTextHouse(house) {
        switch (house) {
            case '1':
                return 'A small apartment in the city';
            case '2':
                return 'A terraced house with a small backyard';
            case '3':
                return 'A semi detached house with a moderately sized yard';
            case '4':
                return 'A barn or farmhouse with plenty of space';
            case '5':
                return 'A mansion or castle surrounded by vast woodlands';
            default:
                return '';
        }
    }

    function handleClick(e) {
        e.preventDefault();
        console.log(walkies);
        console.log(home);
        console.log(house);


        let overallMatchEnergy = false;

        if (energy === 5 && walkies === 5 && house >= 3) {
            overallMatchEnergy = true;
            console.log("Energie is 5")
        } else if (energy >= 3 && energy < 5 && walkies >= 3 /*&& house >= 3*/) {
            overallMatchEnergy = true;
            console.log("Energie gemiddeld, gemiddeld wandelen, gemiddeld huis ")
        } else if (energy <= 2 && energy <= 2 &&  walkies <= 2) {
            overallMatchEnergy = true;
            console.log("Energie is laag, weinig wandelen")
        } else {
            overallMatchEnergy = false;
            console.log("Geen match op energie-niveau")
        }

        let overallMatchHousing = false;

        if


        // } else if (good_with_other_dogs < 3 && walkies < 3) {
        //     overallMatch = true;
        //     console.log("Slecht met andere honden")
        // } else if (trainability >= 3 && home >= 3) {
        //     overallMatch = true;
        //     console.log("Goed te trainen")
        // } else if (trainability <= 3 && walkies <= 3) {
        //     overallMatch = true;
        //     console.log("Niet goed te trainen, niet mee lopen")
        // } else if (playfulness >= 3 && home >= 3 && walkies >= 3) {
        //     overallMatch = true;
        //     console.log("Speels")
        // } else if (barking >= 3 && house >= 3) {
        //     overallMatch = true;
        //     console.log("Blaft veel, groot huis")
        // } else if (barking < 3 && house < 3) {
        //     overallMatch = true;
        //     console.log("Blaft weinig, klein huis")
        // } else if (protectiveness >= 3 && house>= 3) {
        //     overallMatch = true;
        //     console.log("Waaks, groot huis")
        // } else if (protectiveness < 3 && house < 3) {
        //     overallMatch = true;
        //     console.log("Niet waaks, klein huis")
        // } else if (max_weight_female >= 125 && house === 1) {
        //     overallMatch = false;
        //     console.log("Te grote hond voor klein huis")
        // } else if (walkies && home && house === 1) {
        //     overallMatch = false;
        //     console.log("Wil jij wel een hond?")
        // }

        toggleMatch(overallMatchEnergy);

        if (match) {
            console.log("Match");
        } else {
            console.log("No match");
        }

    }




    return (
        <>
            <div className="content_wrapper">
                <div className="vragenlijst_1">
                    <h1>Are you a match with the {dogChoice.name}?</h1>
                        <form>
                            <section>
                                <label htmlFor="walkies_slider">How many times would you like to walk your dog?</label>
                                <input
                                    name="walkies"
                                    id="walkies_slider"
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="1"
                                    value={walkies}
                                    onChange={handleSliderChangeWalkies}
                                />
                                <span>{sliderTextWalkies(walkies)}</span>

                            </section>
                            <section>
                                <label htmlFor="home_slider">How often are you at home?</label>
                                <input
                                    name="home"
                                    id="home_slider"
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="1"
                                    value={home}
                                    onChange={handleSliderChangeHome}
                                />
                                <span>{sliderTextHome(home)}</span>

                            </section>
                            <section>
                                <label htmlFor="house_slider">How big is your house?</label>
                                <input
                                    name="house"
                                    id="house_slider"
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="1"
                                    value={house}
                                    onChange={handleSliderChangeHouse}
                                />
                                <span>{sliderTextHouse(house)}</span>

                            </section>

                            <button type="submit" onClick={handleClick} className="vragenlijst_1_button">Verzend</button>

                            {match &&

                            <p>You're a match!</p>
                            }
                            {!match &&
                                <p>No match!</p>
                            }


                        </form>
                </div>

                <img src={Schnauzer} className="schnauzer_image" alt="Schnauzer" />

            </div>


        </>
    );
}

export default VragenlijstTwee;