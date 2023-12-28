import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>My Store</h1>
            <nav>
                <ul>
                    <li>Cervezas</li>
                    <li>Vinos</li>
                    <li>Licores</li>
                </ul>
            </nav>
            <CartWidget/>

        </header>
    )
}

export default NavBar