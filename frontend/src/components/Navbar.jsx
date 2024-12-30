import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/ngo-signin" className="navbar-link">
            NGO Sign In
          </Link>
        </li>
        <li>
          <Link to="/ngo-signup" className="navbar-link">
            NGO Sign Up
          </Link>
        </li>
        <li>
          <Link to="/student-signin" className="navbar-link">
            Student Sign In
          </Link>
        </li>
        <li>
          <Link to="/student-signup" className="navbar-link">
            Student Sign Up
          </Link>
        </li>
        <li>
          <Link to="/videos" className="navbar-link">
           videos
          </Link>
        </li>
        <li>
          <Link to="/ngo-dashboard" className="navbar-link">
            NGO-Dashboard
          </Link>
        </li>
        <li>
          <Link to="/ngo-request" className="navbar-link">
            NGO-Request
          </Link>
        </li>
        <li>
          <Link to="/student-profile" className="navbar-link">
            Student-Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
