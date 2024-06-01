import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { mode } = useContext(ThemeContext);
  console.log(mode);

  const cartState = useSelector((state)=>state)
  console.log("cartState",cartState.cart.cart.length)
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <Link class="navbar-brand" to="/">
        Navbar
      </Link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            {/* <a class="nav-link" href="/aboutus">About us <span class="sr-only">(current)</span></a> */}
            <Link to="/aboutus" className="nav-link">
              About us
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/empdashboard" className="nav-link">
              Employee Dashboard
            </Link>
          </li>

          {/* <li class="nav-item">
            <Link to="/formdemo1" className="nav-link">
              FORM DEMO 1
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/formdemo2" className="nav-link">
              FORM DEMO 2
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/formdemo3" className="nav-link">
              FORM DEMO 3
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/apidemo1" className="nav-link">
              API Demo 1
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/apidemo2" className="nav-link">
              API Demo 2
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/apidemo3" className="nav-link">
              API Demo 3
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/apidemo4" className="nav-link">
              API Demo 4
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/useeffectdemo" className="nav-link">
              USE EFFECt
            </Link>
          </li> */}
          <li class="nav-item">
            <Link to="/prodcomp" className="nav-link">
              products
            </Link>
            {
              cartState.cart.cart?.length
            }
          </li>
          <li class="nav-item">
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
