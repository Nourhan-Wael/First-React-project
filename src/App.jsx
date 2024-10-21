import { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListOfProducts from "./pages/ListOfProducts";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const intialState = {
    products: [],
    status: "loading",
    cart: [],
    totalPrice: 0,
};
function reduce(state, action) {
    switch (action.type) {
        case "dataRecieved":
            return { ...state, products: action.payload, status: "ready" };
        case "dataFailed":
            return { ...state, status: "error" };
        case "addToCart":
            return {
                ...state,
                cart: [
                    ...state.cart,
                    { ...action.payload, quantity: 1, totalPrice :action.payload.price},
                ],
                totalPrice: state.totalPrice + action.payload.price,
            };
        case "removeFromCart":
            return {
                ...state,
                cart: state.cart.filter(
                    (cart) => cart.id !== action.payload.item.id
                ),
                totalPrice: state.totalPrice - action.payload.price,
            };
        case "incTotalPrice":
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload,
            };
        case "decTotalPrice":
            return {
                ...state,
                totalPrice: state.totalPrice - action.payload,
            };
        case "clearCart":
            return { ...state, cart: [], totalPrice: 0 };
        default:
            return "there is no case like this";
    }
}
function App() {
    const [state, dispatch] = useReducer(reduce, intialState);

    const { products, cart, totalPrice } = state;

    useEffect(function () {
        async function getProducts() {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                dispatch({ type: "dataRecieved", payload: data });
            } catch {
                dispatch({ type: "dataFailed" });
            }
        }

        getProducts();
    }, []);

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="products"
                        element={
                            <ListOfProducts
                                products={products}
                                dispatch={dispatch}
                                cart={cart}
                            />
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <Cart
                                cart={cart}
                                dispatch={dispatch}
                                totalPrice={totalPrice}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
