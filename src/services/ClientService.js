import axios from 'axios';
const CLIENT_API_BASE_URL = "http://3.139.28.195/"

class ClientService {
     getClients(){
         return axios.get(CLIENT_API_BASE_URL);
     }
     createClient(client){
        return axios.post(CLIENT_API_BASE_URL, client);
    }
    updateClient(client) {
        return axios.post(CLIENT_API_BASE_URL, client.notes);
    }


}
export default new ClientService()