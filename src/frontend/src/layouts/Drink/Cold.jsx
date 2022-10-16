import React, {useState, useEffect} from "react";
import ColdService from "../../services/Drink/coldService";

export default function Cold() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        let drinkCold = new ColdService();
        drinkCold
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <h1 className="product-types">Cold</h1>
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
