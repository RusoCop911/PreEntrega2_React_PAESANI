import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items || [], 
        };
    }

    handleRemoveItem = (index) => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({ items });
    };

    handleChangeStock = (index, newStock) => {
        const { items } = this.state;
        if (newStock >= 0) {
            items[index].stock = newStock;
            this.setState({ items });
        }
    };

    calculateTotal() {
        const { items } = this.state;
        return items.reduce((total, item) => total + item.price * item.stock, 0);
    }

    render() {
        const { items } = this.state;

        return (
            <div className="cart">
                <h2>Carrito de Compras</h2>
                <ul>
                    {items && items.map((item, index) => (
                        <li key={index}>
                            {item.title} - ${item.price} x {item.stock}
                            <button onClick={() => this.handleRemoveItem(index)}>Eliminar</button>
                            <input
                                type="number"
                                value={item.stock}
                                onChange={(e) => this.handleChangeStock(index, parseInt(e.target.value))}
                            />
                        </li>
                    ))}
                </ul>
                <div>
                    <strong>Total: ${this.calculateTotal()}</strong>
                </div>
            </div>
        );
    }
}

export default Cart;