import logo from './assets/react.svg'
import './Menu.css'
export default function Menu() {
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Articulos</li>
                <li>Quienes somos</li>
            </ul>
            Menu
        </nav>
    )
}