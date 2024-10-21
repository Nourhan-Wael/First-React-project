import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    const navigate=useNavigate()
    return (
        <div className={styles.container}>
            <p>Welcome to our Shopping Website</p>
            <button className="btn" onClick={()=>navigate("/products")}>Start Shopping</button>
        </div>
    )
}

export default Home
