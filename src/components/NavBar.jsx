import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
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
        </a>
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
            <a class="nav-link active" aria-current="page" href="/add">
              Add Product
            </a>
            <a class="nav-link active" aria-current="page" href="/all">
              All Product
            </a>
            <a class="nav-link" href="/search">
              Search Product
            </a>
            <a class="nav-link" href="/delete">
              Delete Product
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
