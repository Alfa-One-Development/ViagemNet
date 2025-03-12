import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/NavBar.css"
function NavBar() {
const [active, setActive] = useState(false);

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
                <li>
                    <button onClick={() => setActive(true)}>
                        <h3>{active ? "🏃‍♂️" : "👨‍🦽" }</h3>
                        <h6>{active ? "Logged" : "Sign in"}</h6>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;