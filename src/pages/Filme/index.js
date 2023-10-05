import { useEfect, useState } from "react";
import { useParams } from 'react-router-dom';

import api from "../../services/api";

function Filme(){
  const { id } = useParams();
  useEfect(()=>{
    async function loadFilmes(){
      await api.get("movie/now_playing");
    }
  })
  return(
    <div>
      <h1>ACESSANDO FILME {id}</h1>
    </div>
  )
}

export default Filme;