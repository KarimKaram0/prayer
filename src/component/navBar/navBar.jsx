// src/components/NavBar.jsx
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         🌙 المصلي
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                مواقيت الصلاة
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                السبحه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Mushaf">
               ☪️ المصحف الشريف
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
