import axios from "axios";
//base url:https://api.themoviedb.org/3/
//url api: /movie/now_playing?api_key=b846534ca04f9d422f16046ceb1a619c&language=pt-BR
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

});

export default api;