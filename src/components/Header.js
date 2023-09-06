import logo from "../assets/logo.png"
import './Header.css'
import {Link} from "react-router-dom";
function Header() {

    return (
        <nav>
            <span className="logo-container">
            <img src={logo} alt="logo" className="logo"/>
            <Link to='/'><h3>DOGMATCH.NL</h3></Link>
            </span>
            <Link to='/inloggen'><p className="login_button">Inloggen</p></Link>

        </nav>

    );
};


export default Header;