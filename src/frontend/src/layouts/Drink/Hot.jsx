import React, { useState, useEffect } from "react";
import HotService from "../../services/Drink/hotService";
export default function Hot() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let drinkHot = new HotService();
        drinkHot
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <h1 className="product-types">Sıcak</h1>
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
