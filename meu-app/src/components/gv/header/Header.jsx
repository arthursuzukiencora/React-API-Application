import { Link } from 'react-router-dom';
import './Header.css';  // Optional for styling

function Header() {
  return (
    <header>
      <h1>Tipos de request</h1>
      <div className="dropdown">
        <button className="dropbtn">Opções</button>
        <div className="dropdown-content">
          <Link to="/">Add</Link>
          <Link to="/get">Get</Link>
          <Link to="/update">Update</Link>
          <Link to="/delete">Remove</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
