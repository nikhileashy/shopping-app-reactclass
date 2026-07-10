import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <Link
          class="navbar-brand"
          to="#"
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Bebas Neue",
            fontStyle: "italic",
            fontSize: "24px",
          }}
        >
          Shopping{" "}
          {/* <span class="material-symbols-outlined" style={{ marginLeft: 5 }}>
            shopping_bag_speed
          </span> */}
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/add">
              Add Product
            </Link>
            <Link class="nav-link active" aria-current="page" to="/all">
              All Product
            </Link>
            <Link class="nav-link" to="/search">
              Search Product
            </Link>
            <Link class="nav-link" to="/delete">
              Delete Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
