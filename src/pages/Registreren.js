import Corgi from "../assets/Corgi.png";
import './Inloggen.css'



function Inloggen() {

    return(
        <>
            <div className="content_wrapper">
                <div className="information">
                    <h1>Registreren</h1>
                    <p className="form_paragraph">
                        <form>
                            <section>
                                <label htmlFor="username-field">Naam</label>
                                <input
                                    name="username"
                                    id="username-field"
                                    type="text"
                                    value={null}
                                />
                            </section>
                            <section>
                                <label htmlFor="email-field">E-mail</label>
                                <input
                                    name="email"
                                    id="email-field"
                                    type="email"
                                    value={null}
                                />
                            </section>
                            <section>
                                <label htmlFor="password-field">Wachtwoord</label>
                                <input
                                    name="wachtwoord"
                                    id="wachtwoord-field"
                                    type="password"
                                    value={null}
                                />
                            </section>

                            <button type="submit">Verzend</button>
                        </form>
                    </p>
                </div>
                <img src={Corgi} className="corgi_image" alt="Corgi" />
            </div>

        </>
    );
}

export default Inloggen;