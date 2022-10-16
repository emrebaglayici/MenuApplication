import axios from "axios";

export default class BeverageService {
    getProducts(){
        return axios.get('http://localhost:8080/api/v1/getByCategoryAndType?categoryName=drink&typeName=meşrubat');
    }
}