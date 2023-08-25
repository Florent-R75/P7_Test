import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo_header.svg";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <figure className="header__fig">
          <img className="logo" src={logo} alt="logo de l'agence kasa" />
        </figure>
      </Link>
      <Nav />
    </header>
  );
}
