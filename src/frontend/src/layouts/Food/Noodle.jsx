import React, {useState, useEffect} from "react";
import NoodleService from "../../services/Food/noodleService";


export default function Noodle() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let noodle = new NoodleService();
        noodle
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <table className="center">
                <h1 className="product-types-food">Noodle </h1>
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
