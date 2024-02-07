import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '786acb6da2de3fce73d5dc1b054f537a',
        language: 'es-ES'
    }
});

export default movieDB;