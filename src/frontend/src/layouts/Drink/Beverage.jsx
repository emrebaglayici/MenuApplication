import React, { useState, useEffect } from "react";
import BeverageService from "../../services/Drink/beverageService";
export default function Beverage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let drinkBeverage = new BeverageService();
        drinkBeverage
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <h1 className="product-types">Meşrubat</h1>
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
