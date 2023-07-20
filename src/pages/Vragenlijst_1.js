import Pug from '../assets/Pug.png'
import './Vragenlijst_1.css'
import {useNavigate} from "react-router-dom";
import axios from 'Axios';




function VragenlijstEen() {
    const navigate = useNavigate();
    const name = 'Golden Retriever';

    async function fetchData() {
        try {
            const result = await axios.get('https://api.api-ninjas.com/v1/dogs?name=' + name, {
                'Accept': 'application/json',
                'X-Api-Key': 'C6RZGKfUk0YgsX66tZ3zgw==nh9C36MXgSXHP6aF'
            });
            console.log(result);
        } catch(e) {
            console.error(e);
        }
    }

    return(
        <>
            <div className="content_wrapper">
                <div className="information">
                    <h1>Jouw wensen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti itaque ullam velit vitae? Atque dolorem minima provident quos recusandae. Doloremque, exercitationem, perspiciatis. Deleniti eaque enim maiores officia quas reprehenderit sed tenetur ullam velit? Blanditiis dolorem ducimus earum laudantium maxime minus omnis sit temporibus. Aperiam distinctio esse eveniet facere, laudantium placeat.
                    </p>
                </div>
                <img src={Pug} className="pug_image" alt="Pug" />
                <button className="button_bottom" onClick={() => navigate('/vragenlijst_2')}>Ga Verder</button>
            </div>

        </>
    );
}

export default VragenlijstEen;