/* eslint-disable react/prop-types */
// import { useState } from "react";
import styles from "./Product.module.css";

function Product({ product, dispatch, cart }) {
    const addItem = cart.map(item=>item.id).includes(product.id);
    return (
        <div className={styles.product}>
            <img src={product.image} className={styles.img} />
            <h3 className={styles.title}>{product.title}</h3>
            <p className="price">{product.price}</p>
            <p>
                Category : <span className>{product.category}</span>
            </p>
            <p>
                Aavailable Quantity :
                <span className={styles.quantity}>
                    {product.rating["count"]}
                </span>
            </p>

            <button
                className="btn"
                onClick={() => {
                    dispatch({ type: "addToCart", payload: product });
                }}
                disabled={addItem}
            >
                Add to cart
            </button>
        </div>
    );
}

export default Product;
