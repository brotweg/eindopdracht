import './RasInformatie.css'
import IrishSetter from '../assets/Irish_setter.png'
import './Vragenlijst_1.css'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../components/Context";
import BreedInfo from "../components/BreedInfo";


function RasInformatie() {
    const navigate = useNavigate();
    const [dogContext, setDogContext] = useContext(Context);

    console.log(dogContext);




    return (
        <>
            <div className="content_wrapper">
                <div className="vragenlijst_1">
                    <BreedInfo />
                </div>
                <img src={IrishSetter} className="irish_setter_image" alt="Irish Setter" />
                <button className="button_bottom" onClick={() => navigate('/vragenlijst_2')}>Ga Verder</button>
            </div>


        </>
    )
}

export default RasInformatie;