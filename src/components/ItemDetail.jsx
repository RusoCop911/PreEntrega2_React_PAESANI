import './CSS/ItemDetail.css';
import ItemCount from './ItemCount';

export default function ItemDetail({ detail }) {
    return (
        <div className="card-item-detail">
            <img src={detail.imagen} alt={detail.nombre} className="detail-image" />
            <h3>{detail.nombre}</h3>
            <p>Precio: {detail.precio}</p>
            <div>
                <ItemCount />
            </div>
        </div>
    );
}
