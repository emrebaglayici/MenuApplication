import React from "react";

class Drink extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:8080/api/v1/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const {DataisLoaded, items} = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1></div>;

        return (
            <div>
                <h1 className="product-types">Sıcak</h1>
                <table className="center">
                    <tbody>
                    {
                        items.content.map((product) => (

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
}

export default Drink;