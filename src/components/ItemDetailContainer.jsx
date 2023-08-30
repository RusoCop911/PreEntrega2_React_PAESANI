import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/productos.json`);
            const products = await response.json();

            if (id) {
                const filteredProduct = products.find(product => product.id === parseInt(id));
                setDetail(filteredProduct);
            } else {
                setDetail(products);
            }
        };

        getProduct();
    }, [id]);

    return (
        <ItemDetail detail={detail} />
    );
}
