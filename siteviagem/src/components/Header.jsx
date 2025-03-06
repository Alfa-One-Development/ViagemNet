import NavBar from './NavBar.jsx';
import Logo from '../assets/logo.png';
import "../styles/Header.css"
function Header() {
    return (
        <>
        <header>
        <img src={Logo}></img>
        <NavBar />
        </header>
        </>
    )
}
export default Header;