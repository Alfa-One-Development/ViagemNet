import { Link } from "react-router-dom";
import "../styles/NavBar.css"
function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/">
                    <h3>🏠</h3>
                    <h6>Home</h6>
                    </Link>
                </li>
                <li>
                    <Link to="/balneario">
                    <h3>🚤</h3>
                    <h6>Balneário Camburiú</h6>
                    </Link>
                </li>
                <li>
                <Link to="/lisboa">
                    <h3>🛵</h3>
                    <h6>Lisboa</h6>
                    </Link>
                </li>
                <li>
                <Link to="/novadeli">
                    <h3>🚲</h3>
                    <h6>Nova Deli</h6>
                    </Link>
                </li>
                <li>
                <Link to="/indianapolis">
                    <h3>🛫</h3>
                    <h6>Indianápolis</h6>
                    </Link>
                </li>
                <li>
                <Link to="/luanda">
                    <h3>🛺</h3>
                    <h6>Luanda</h6>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;