import React, {useState, useEffect} from "react";
import DetoxService from "../../services/Drink/detoxService";

export default function Detox() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let drinkDetox = new DetoxService();
        drinkDetox
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <h1 className="product-types">Detoks</h1>
            <table className="center">
                <tbody>
                {
                    products.map((product) => (

                        <tr key={product.id}>
                            <td className="align-left">{product.name}</td>
                            {product.shortInfo != null &&
                                <p className="custom-short-info"><br/>{product.shortInfo}</p>}
                            <td>{product.price}₺</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}
