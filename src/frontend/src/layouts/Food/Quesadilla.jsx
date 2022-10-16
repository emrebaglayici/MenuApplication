import React, {useState, useEffect} from "react";
import QuesadillaService from "../../services/Food/quesadillaService";


export default function Quesadilla() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let quesadilla = new QuesadillaService();
        quesadilla
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <table className="center">
                <h1 className="product-types-food">Quesadilla </h1>
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
