import logo from "../assets/logo.png"
import styles from './Header.module.css'
import {Link} from "react-router-dom";

function Header() {

    return (
        <nav>
            <span className={styles['logo-container']}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <Link to='/'><h3>DOGMATCH.NL</h3></Link>
            </span>
            <Link to='/inloggen'><p className={styles['login_button']}>Inloggen</p></Link>

        </nav>

    );
};


export default Header;