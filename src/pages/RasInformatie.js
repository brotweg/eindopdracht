import styles from './RasInformatie.module.css'
import '../index.css'
import IrishSetter from '../assets/Irish_setter.png'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../components/Context";
import BreedInfo from "../components/BreedInfo";


function RasInformatie() {
    const navigate = useNavigate();
    const [dogContext, setDogContext] = useContext(Context);

    return (
        <>
            <div className={styles['page_wrapper']}>
                <div className={styles['inner_wrapper']}>
                    <BreedInfo />
                </div>
                <div className={styles.dog}>

                        <img src={IrishSetter} className={styles['dog--setter']} alt="Irish Setter" />


                        <button onClick={() => navigate('/vragenlijst_2')}>Continue</button>

                </div>
            </div>


        </>
    )
}

export default RasInformatie;