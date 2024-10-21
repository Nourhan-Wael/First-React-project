/* eslint-disable react/prop-types */
import styles from "./CartItem.module.css";

function CartItem({ item, dispatch }) {
    // const [productPrice, setProductPrice] = useState(item.price);
    return (
        <div className={styles.item}>
            <img src={item.image} className={styles.img} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className="price">{item.totalPrice.toFixed(2)}</p>
            <div className={styles.buttons}>
                <button
                    className={`btn ${styles.decrease}`}
                    onClick={() => {
                        if (item.quantity > 1) {
                            item.quantity -= 1;
                            item.totalPrice = item.price / item.quantity;
                            // setProductPrice((price) => price - item.price);
                            dispatch({
                                type: "decTotalPrice",
                                payload: item.price,
                            });
                        }
                    }}
                >
                    -
                </button>
                <span>{item.quantity}</span>
                <button
                    className={`btn ${styles.add}`}
                    onClick={() => {
                        // setNumItem((num) => num + 1);
                        // numItem.current + 1;
                        item.quantity += 1;
                        item.totalPrice = item.price * item.quantity;
                        // setProductPrice((price) => price + item.price);
                        dispatch({
                            type: "incTotalPrice",
                            payload: item.price,
                        });
                    }}
                >
                    +
                </button>
                <button
                    className={`btn ${styles.remove}`}
                    onClick={() => {
                        dispatch({
                            type: "removeFromCart",
                            payload: { item: item, price: item.totalPrice },
                        });
                    }}
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default CartItem;
