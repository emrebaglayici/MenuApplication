import React, {useState, useEffect} from "react";
import MainCourseService from "../../services/Food/mainCourseService";


export default function MainCourse() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let main = new MainCourseService();
        main
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <table className="center">
                <h1 className="product-types-food">Main Course </h1>
                <tbody>
                {
                    products.map((product) => (

                        <tr key={product.id}>
                            <td className="align-left-food">{product.name}</td>
                            {product.shortInfo != null &&
                                <p className="custom-short-info-food"><br/>{product.shortInfo}</p>}
                            <td className="food">{product.price}₺</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}
