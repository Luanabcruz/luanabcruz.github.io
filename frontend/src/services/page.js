import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.PUBLIC_URL}/data`,
});

const isProduction = window.location.hostname === 'luanabcruz.github.io/'; // Verifica o domínio de produção

const apiExternal = axios.create({
    baseURL: isProduction ? 'https://api.moonapp.com.br/' : 'http://localhost:8000/',
});

const pageApi = {
    home: () => api.get('home.json'),
    education: (slug) => api.get(`education/${slug}.json`),
    listDisciplines:() => apiExternal.get(`api/disciplines`),
    getDiscipline:(slug) => apiExternal.get(`api/discipline/${slug}`),
    listSelectionProcesses:() => apiExternal.get(`api/selection-processes`),
    getSelectionProcesses: (id) => apiExternal.get(`api/selection-process/${id}`),
    submitSelectionProcesses: (id, data) => apiExternal.post(`api/selection-process/${id}/submit`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
}

export default pageApi;