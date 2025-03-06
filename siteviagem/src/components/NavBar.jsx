import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/balneario">Página da Amizade</Link>
                </li>
                <li>
                    <Link to="/lisboa">Página da Proatividade</Link>
                </li>
                <li>
                    <Link to="/novadeli">Página da União</Link>
                </li>
                <li>
                    <Link to="/novadeli">Página da União</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;