import './Error.css';
import { Link } from 'react-router-dom';

function Error() {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>PÁGINA NÃO ENCONTRADA</h2>
            <Link to={"/"}>Acesse a lista de filmes</Link>
        </div>
    )
}
export default Error;