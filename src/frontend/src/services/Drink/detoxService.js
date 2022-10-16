import axios from "axios";

export default class DetoxService {
    getProducts(){
        return axios.get('http://localhost:8080/api/v1/getByCategoryAndType?categoryName=drink&typeName=detox');
    }
}