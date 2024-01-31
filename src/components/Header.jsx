import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 fs-3">
          <Link to="/" className="text=center">
            Book-WORM
          </Link>
        </span>
        <div className="d-flex gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/category">Category</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
