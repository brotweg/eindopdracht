import {Context} from "../components/Context";
import Schnauzer from "../assets/Schnauzer.png"
import {useContext, useState} from "react";


function VragenlijstTwee() {

    const [dogChoice, setDogChoice] = useContext(Context);




    return (
        <>
            <div className="content_wrapper">
                <div className="information">
                    <p>Ben jij een match met de {dogChoice.name}?</p>

                </div>

                <img src={Schnauzer} className="pug_image" alt="Schnauzer" />
            </div>


        </>
    );
}

export default VragenlijstTwee;