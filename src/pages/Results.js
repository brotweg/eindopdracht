import './RasInformatie.css'
import IrishSetter from '../assets/Irish_setter.png'
import './Vragenlijst_1.css'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../components/Context";


function Results() {

const [dogChoice, setDogChoice] = useContext(Context);

const navigate = useNavigate();

console.log(dogChoice);
    return (
        <>
            <div className="content_wrapper">
                <div className="vragenlijst_1">
                    <h1>Results</h1>
                    <p>
                        <ul>
                            <li>{dogChoice.matchEnergy}</li>
                            <li>{dogChoice.matchHousing}</li>
                            <li>{dogChoice.matchPlayfulness}</li>
                        </ul>
                    </p>
                </div>
                <img src={IrishSetter} className="irish_setter_image" alt="Irish Setter" />
                <button className="button_bottom" onClick={() => navigate('/vragenlijst_1')}>Try again?</button>
            </div>
        </>
        )}

export default Results;