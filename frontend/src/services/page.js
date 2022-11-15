import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/data`,
});

const pageApi = {
    home: () => api.get('home.json'),
}

export default pageApi;