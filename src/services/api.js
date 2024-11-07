import axios from "axios";

// Define as configurações padrões quando cria a instância
const api = axios.create({
    baseURL: 'http://localhost:3000' // endereço da API
});
export default api