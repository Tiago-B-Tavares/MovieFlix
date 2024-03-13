import Home from '../../pages/Home';
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <div className="container">
                <Link className="logo" to='/'> Tiggas Flix</Link>
                <Link className="favoritos" to='/favoritos'> Meus Filmes</Link>
            </div>  
        </header>
    )
}
export default Header;