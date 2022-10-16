import axios from "axios";

export default class BreakfastService {
    getProducts(){
        return axios.get('http://localhost:8080/api/v1/getByCategoryAndType?categoryName=food&typeName=breakfast');
    }
}