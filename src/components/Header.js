import logo from "../assets/logo.png"
import './Header.css'
function Header() {

    return (
        <nav>
            <span className="logo-container">
            <img src={logo} alt="logo" className="logo"/>
            <h3>DOGMATCH.NL</h3>
            </span>
            <p className="login_button">Inloggen</p>

        </nav>

    );
};


export default Header;