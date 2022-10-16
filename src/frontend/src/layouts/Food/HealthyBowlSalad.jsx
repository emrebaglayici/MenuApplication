import React, {useState, useEffect} from "react";
import HealthyBowlSaladService from "../../services/Food/healthyBowlSaladService";


export default function HealthyBowlSalad() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let healthy = new HealthyBowlSaladService();
        healthy
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <table className="center">
                <h1 className="product-types-food">Heyday Healthy Bowl Salad </h1>
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
