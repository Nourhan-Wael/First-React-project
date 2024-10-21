import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>Shopping</h1>
            <ul className={styles.list}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
