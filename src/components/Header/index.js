import Home from '../../pages/Home';
import { Link } from "react-router-dom";

function Header() {
    return(
        <header class="container-fluid navbar navbar-dark bg-dark">
            <div class="container">
                <Link className="navbar-brand" to='/'> Tiggas Flix</Link>
                <Link className="favoritos btn btn-primary" to='/favoritos'> Meus Filmes</Link>
            </div>  
        </header>
    )
}
export default Header;