import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.edamam.com/api/recipes' //API url
});

export default instance;