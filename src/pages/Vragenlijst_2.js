import {Context} from "../components/Context";
import Schnauzer from "../assets/Schnauzer.png"
import {useContext, useState, } from "react";
import styles from './Vragenlijst_2.module.css';
import {useNavigate} from "react-router-dom";
import results from "./Results";
import Pug from "../assets/Pug.png";
import Corgi from "../assets/Corgi.png";



function VragenlijstTwee() {
    const navigate = useNavigate();
    const [dogChoice, setDogChoice] = useContext(Context);
    const [walkies, setWalkies] = useState(1);
    const [home, setHome] = useState(1);
    const [house, setHouse] = useState(1);
    const [matchEnergy, setMatchEnergy] = useState('');
    const [matchHousing, setMatchHousing] = useState('');
    const [matchPlayfulness, setMatchPlayfulness] = useState('');
    const {
        energy,
        good_with_other_dogs, // just in case I need some of these later
        trainability,
        playfulness,
        barking,
        protectiveness,
        min_height_female,
    } = dogChoice;


    function handleSliderChangeWalkies(e) {
        const convertedValue = parseInt(e.target.value, 10);
        setWalkies(convertedValue);

    }

    function handleSliderChangeHome(e) {
        const convertedValue = parseInt(e.target.value, 10);
        setHome(convertedValue);

    }

    function handleSliderChangeHouse(e) {
        const convertedValue = parseInt(e.target.value, 10);
        setHouse(convertedValue);
    }

    function sliderTextWalkies(walkies) {
        switch (walkies) {
            case 1:
                return 'Never';
            case 2:
                return 'Sometimes';
            case 3:
                return 'Three times a  day';
            case 4:
                return 'Three times a day, with at least one 1-hour walk';
            case 5:
                return 'My dog will be out with me ALL DAY';
            default:
                return '';
        }
    }

    function sliderTextHome(home) {
        switch (home) {
            case 1:
                return `I'm never at home`;
            case 2:
                return `I'm not at home often, but the dog will have toys`;
            case 3:
                return `I'm at home regularly to play with my dog`;
            case 4:
                return `There's always at least one family member at home to keep the dog company`;
            case 5:
                return `My dog will have it's own agility course in the backyard!`;
            default:
                return '';
        }
    }

    function sliderTextHouse(house) {
        switch (house) {
            case 1:
                return 'A small apartment in the city';
            case 2:
                return 'A terraced house with a small backyard';
            case 3:
                return 'A semi detached house with a moderately sized yard';
            case 4:
                return 'A barn or farmhouse with plenty of space';
            case 5:
                return 'A mansion or castle surrounded by vast woodlands';
            default:
                return '';
        }
    }

    function energyCheck() {

        let matchEnergy = '';
        let overallMatch = true;

        if (energy === 5 && walkies < 5) {
            matchEnergy ="This dog is a very high-energy breed. He needs more exercise than you can offer him.";
            overallMatch = false;

        } else if (walkies === 1 ) {
            matchEnergy = "You never want to walk your dog? Maybe a pet turtle would better suit your needs.";
            overallMatch = false;

        } else if (energy >= 3 && walkies <= 3) {
            matchEnergy = "If this is the dog of your choice, keep in mind that he needs more exercise than you are willing to give him right now.";
            overallMatch = false;

        } else if (energy <= 2 && walkies > 2) {
            matchEnergy = "This is kind of a lazy dog. Since you like to go out for walks, you might want a more energetic dog to exercise together.";
            overallMatch = false;

        } else if (energy <= 2 && walkies <= 2) {
            matchEnergy ="This is kind of a lazy dog, but so are you, so you two are a great match.";

        } else if (energy >= 3 &&  walkies >= 3) {
            matchEnergy ="It seems that as far as walks and energy levels are concerned, you and this breed match perfectly.";

        } else if (walkies === 5 && energy === 5) {
            matchEnergy = "You can't sit still can you? Well, neither can this dog breed so it's a perfect match!";

        } else {
            matchEnergy ="Error!";

        }
        setMatchEnergy(matchEnergy);
        return { matchEnergy, overallMatch };
    }

    function housingCheck() {

        let matchHousing = '';
        let overallMatch = true;

        if (min_height_female > 20.00 && house < 3) {
            matchHousing = "This dog is just way too big for your home!";
            overallMatch = false;

        } else if (house <= 2 && barking > 3) {
            matchHousing = "Keep in mind that this breed barks a lot, will your neighbors be happy?";
            overallMatch = false;

        } else if (house <= 2 && energy >= 3) {
            matchHousing = "This dog has got too much energy to be living in such a small house.";
            overallMatch = false;

        } else if (house > 2 && house < 5 ) {
            matchHousing = "You've got enough space for this dog.";

        } else if (house > 4) {
            matchHousing = "You have plenty of space for ALL the DOGS!";

        } else {
            matchHousing = "Unfortunately, something went wrong.";
        }
        setMatchHousing(matchHousing);
        return { matchHousing, overallMatch };
    }

    function playfulnessCheck() {

        let matchPlayfulness = '';
        let overallMatch = true;

        if (playfulness < 3 && home < 3) {
            matchPlayfulness = "This is a very serious dog breed. He will want to have a job, you don't seem to have time for that.";
            overallMatch = false;

        } else if (playfulness < 3 && home >= 4) {
            matchPlayfulness ="This is a very serious dog breed. You'll have a great co-worker in him.";

        } else if (playfulness > 2 && playfulness < 5  && home > 2 && home < 5) {
            matchPlayfulness ="You seem to be a great match when it comes to playing games together like tug and fetch.";

        } else if (playfulness > 2 && home < 3) {
            matchPlayfulness ="You seem to be away from home often. Your dog will get bored this way.";
            overallMatch = false

        } else if (playfulness > 3 && home > 4) {
            matchPlayfulness ="You will never be bored at home again with this fella at your side!";

        }else if (playfulness > 0 && home > 4 ) {
            matchPlayfulness ="You're going to be best buds, never leaving each others side.";

        } else {
            matchPlayfulness ="Something went wrong.. excuse us..";
        }

        setMatchPlayfulness(matchPlayfulness);
        return { matchPlayfulness, overallMatch };
    }

    function saveResultInContext(results) {
        const updatedDogChoice = {
            ...dogChoice,
            ...results,

        };
        setDogChoice(updatedDogChoice);

    }

    function handleClick(e) {
        e.preventDefault();
        const energyResult = energyCheck();
        const housingResult = housingCheck();
        const playfulnessResult = playfulnessCheck();

        const energyMatch = energyResult.overallMatch;
        const housingMatch = housingResult.overallMatch;
        const playfulnessMatch = playfulnessResult.overallMatch;

        const results = {
            ...energyResult,
            ...housingResult,
            ...playfulnessResult,
            overallMatch: energyResult.overallMatch && housingResult.overallMatch && playfulnessResult.overallMatch,
        };

        saveResultInContext(results);
        navigate('/Results');

    }



    return (
        <>
            <div className={styles['page_wrapper']}>
                <div className={styles['inner_wrapper']}>
                    <h1>Are you a match with the {dogChoice.name}?</h1>
                    <form>
                        <section>
                            <label htmlFor="walkies_slider">How many times would you like to walk your
                                dog?</label><br />
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
                            <label htmlFor="home_slider">How often are you at home?</label><br />
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
                            <label htmlFor="house_slider">How big is your house?</label><br />
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

                        <button type="submit" onClick={handleClick} className="vragenlijst_1_button">Verzend
                        </button>

                        <p>{matchEnergy} </p>
                        <p>{matchPlayfulness}</p>
                        <p>{matchHousing}</p>


                    </form>
                </div>
                <div className={styles['dog']}>
                    <img src={Schnauzer} className={styles['dog--schnauzer']} alt="Schnauzer"/>
                </div>

            </div>


        </>
    );
}

export default VragenlijstTwee;