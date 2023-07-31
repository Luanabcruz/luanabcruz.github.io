import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/data`,
});

const apiExternal = axios.create({
    // baseURL: `https://api.moonapp.com.br/`,
    baseURL: `http://localhost:8000/`,
});

const pageApi = {
    home: () => api.get('home.json'),
    education: (slug) => api.get(`education/${slug}.json`),
    listDisciplines:() => apiExternal.get(`api/disciplines`),
    getDiscipline:(slug) => apiExternal.get(`api/discipline/${slug}`),
    listSelectionProcesses:() => apiExternal.get(`api/selection-processes`),
    getSelectionProcesses: (id) => apiExternal.get(`api/selection-process/${id}`)
}

export default pageApi;