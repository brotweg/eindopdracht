import ChowChow from "../assets/ChowChow.png";
import './Uitleg.css'

import {useNavigate} from "react-router-dom";



function Uitleg() {
    const navigate = useNavigate();
    return(
        <>
            <div className="content_wrapper">
                <div className="information">
                    <h1>Uitleg</h1>
                    <p>Eerst vul je in wat jij verwacht van je nieuwe viervoeter. Is hij speels of just serieus? Blaft hij veel? Is hij waakzaam? Ligt hij de hele dag bij jou op de bank of rent hij liever over het strand?</p>
                    <p>Naar aanleiding van jouw antwoorden wordt er een selectie gemaakt uit meer dan honderd hondenrassen. Als je een keuze hebt gemaakt voor een ras wat jou aanspreekt, krijg je een aantal vragen over jouw eigen situatie. Heb je wel genoeg ruimte en tijd voor dit ras?</p>
                    <p>Doe de check en je ziet gelijk of jouw favoriete ras bij jou past.</p>
                </div>
                <img src={ChowChow} className="chow_image" alt="Chow Chow" />
                <button className='start_button' onClick={() => navigate('/vragenlijst_1')}>Start</button>
            </div>

        </>
    );
}

export default Uitleg;