/* eslint-disable react/prop-types */
import CartItem from "../components/CartItem";
import styles from "./Cart.module.css";

function Cart({ cart, dispatch, totalPrice ,numItem}) {
    return (
        <div className={styles.cart}>
            <h3 className={styles.title}>My Cart</h3>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} dispatch={dispatch} numItem={numItem} />
            ))}
            {cart.length ? (
                <div className={styles.pay}>
                        <button
                            className={`btn ${styles.clear}`}
                            onClick={() => {
                                dispatch({ type: "clearCart" });
                            }}
                        >
                            Clear Cart
                        </button>

                    <div className={styles.totalPrice}>Pay: <span>{totalPrice.toFixed(2)}</span></div>
                </div>
            ) : null}
        </div>
    );
}

export default Cart;
