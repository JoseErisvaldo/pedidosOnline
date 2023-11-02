import "./index.css";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
function Header() {
  return (
    <div className="nav-bar">
      <div className="nav-user">
        <div>
          <Link to="/pedidos" ><BiListUl /></Link>
          
        </div>
        <div>
          <Link to="/minha-conta" ><BiUser /></Link>
          
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/novidades">Novidades</Link>
        </li>
        <li>
          <Link to="/categorias">Categorias</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
