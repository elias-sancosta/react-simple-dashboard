import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <a href="/Profile">Profile</a>
          </li>
          <li>
            <a href="/Reglage">Réglage</a>
          </li>
          <li>
            <a href="/Communauté">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
