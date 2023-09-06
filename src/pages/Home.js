import Bernes_mountain_dog from "../assets/Bernes_mountain_dog.png"
import './Home.css'

function Home() {

    return (
        <>
        <div className="content_wrapper">
            <div className="information">
        <h1>Welk hondenras past bij jou?</h1>
        <p>Er zijn enkele honderden hondenrassen waar je uit kan kiezen als toekomstig baasje. Je wilt geen verkeerde of impulsieve keuze maken, maar soms kun je door de bomen het bos niet meer zien. Dogmatch.nl probeert aanstaande hondeneigenaren een zetje in de goede richting te geven door alvast te filteren wat wel of niet bij jouw situatie past. Enkele korte vragen geven een overzicht van wat jij verwacht van jouw toekomstige hond. Nog een aantal vragen geven aan wat de hond van jou verwacht. Is het een match?</p>
        <p>Login of creer een account om te beginnen!</p>
                <span>
        <button>Login</button>
        <button>Registreer</button>
                </span>
        </div>
            <img src={Bernes_mountain_dog} className="bernes_image" alt="Bernes Mountain Dog" />
        </div>

            </>
    );
}

export default Home;