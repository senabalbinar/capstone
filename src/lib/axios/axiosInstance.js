import axios from "axios"
const theMovieApiBaseUr─▒ = "https://api.themoviedb.org/3/"
const theMovieApiKey = "d3b59f21ea7eadcf5138b911cf4b372a"
const axiosInstance = axios.create({ baseURL: theMovieApiBaseUr─▒ })

export { theMovieApiKey, axiosInstance }
