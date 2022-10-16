import React, {useState, useEffect} from "react";
import BowlService from "../../services/Food/bowlService";


export default function Bowl() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let bowl = new BowlService();
        bowl
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <table className="center">
                <h1 className="product-types-food">Bowl</h1>
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
