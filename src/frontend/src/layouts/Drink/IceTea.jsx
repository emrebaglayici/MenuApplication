import React, {useState, useEffect} from "react";
import IceTeaService from "../../services/Drink/iceTeaService";

export default function IceTea() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let drinkIceTea = new IceTeaService();
        drinkIceTea
            .getProducts()
            .then((result) => setProducts(result.data));
    });
    return (
        <div>
            <h1 className="product-types">Ice Tea</h1>
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
