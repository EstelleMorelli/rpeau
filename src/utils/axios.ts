import axios from 'axios';

const axiosInstance = axios.create({
    //baseURL: 'https://backend.gite-les-fauvettes.fr/api/',
    baseURL: 'http://127.0.0.1:8000/api/',
  });
  
  export default axiosInstance;