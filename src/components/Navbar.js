import React, { useContext } from "react";
import "./Navbar.css";
import { AuthContext, useAuthenticated, useTokenState } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    setToken(null);
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Virtuo
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {token ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/classrooms">
                  Classes
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Classroom
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/classrooms/create">
                      Create Classroom
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/classrooms/join">
                      Join Classroom
                    </Link>
                  </li>
                  
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          )}

          <div className="d-flex" role="auth">
            {token === null ? (
              <>
                <Link
                  className="btn btn-outline-success ms-3 login"
                  to="/login"
                >
                  Login
                </Link>
                <Link className="btn btn-outline-success" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <button className="btn btn-outline-success ms-3" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
