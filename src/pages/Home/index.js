import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import api from '../../services/api'
import './home.css';

///movie/now_playing?api_key=b846534ca04f9d422f16046ceb1a619c&language=pt-BR
function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "b846534ca04f9d422f16046ceb1a619c",
          language: "pt-BR",
          page: 1
        }
      })
      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 20))
    }
    loadFilmes();
  });

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;