/* eslint-disable react/prop-types */
import Product from "../components/Product";
import styles from "./ListOfProducts.module.css";

function ListOfProducts({ products, dispatch,cart }) {
    return (
        <ul className={styles.list}>
            {products.map((product) => (
                <li key={product.id}>
                    <Product product={product} dispatch={dispatch} cart={cart} />
                </li>
            ))}
        </ul>
    );
}

export default ListOfProducts;
