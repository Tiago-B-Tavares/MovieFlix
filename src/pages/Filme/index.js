import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './filme-info.css'
import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      await api.get(`movie/${id}`, {
        params: {
          api_key: "b846534ca04f9d422f16046ceb1a619c",
          language: "pt-BR",
        }
      })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", {replace: true});
          return;
        })
    }
    loadFilmes();

    return () => {
      console.log("Componente desmontado");
    }
  }, [navigate, id]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes do filme</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />
      <h3>Sinopse:</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação:{Math.floor(filme.vote_average)}/10</strong>
      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
        </button>

      </div>
    </div>
  )
}

export default Filme;