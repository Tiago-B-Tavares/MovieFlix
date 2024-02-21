import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./filme-info.css";
import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "b846534ca04f9d422f16046ceb1a619c",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }
    loadFilmes();

    return () => {
      console.log("Componente desmontado");
    };
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("movie@flix");
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const filmesFavoritos = filmesSalvos.some(
      (salvoFavorito) => salvoFavorito.id === filme.id
    );
    if (filmesFavoritos) {
      toast.warn('Esse filme já está nos favoritos')
    } else {
      filmesSalvos.push(filme);
      localStorage.setItem("movie@flix", JSON.stringify(filmesSalvos));
      toast.success("Filme salvo com sucesso");
    }
  }

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
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse:</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação:{Math.floor(filme.vote_average)}/10</strong>
      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
