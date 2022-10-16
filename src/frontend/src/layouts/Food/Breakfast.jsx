import React, {useState, useEffect} from "react";

import BreakfastService from "../../services/Food/breakfastService";

export default function Breakfast() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let foodBreakfast = new BreakfastService();
        foodBreakfast
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <table className="center">
                <h1 className="product-types-food">Breakfast</h1>
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
