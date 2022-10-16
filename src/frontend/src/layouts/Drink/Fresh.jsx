import React, {useState, useEffect} from "react";
import FreshService from "../../services/Drink/freshService";

export default function Fresh() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let drinkFresh = new FreshService();
        drinkFresh
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <h1 className="product-types">Ferahlatıcı</h1>
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
