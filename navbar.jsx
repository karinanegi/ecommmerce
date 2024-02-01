import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <a className="navbar-brand" href="#">
            <img
              src="./src/assets/shopify.png"
              alt="Logo"
              width="100"
              height="40"
            />
          </a>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Clothes
                </a>
                <a className="dropdown-item" href="#">
                  Beauty
                </a>
                <a className="dropdown-item" href="#">
                  Home&Living
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Men
                </a>
                <a className="dropdown-item" href="#">
                  Women
                </a>
                <a className="dropdown-item" href="#">
                  Kidz
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cart
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Order1
                </a>
                <a className="dropdown-item" href="#">
                  Order2
                </a>
                <a className="dropdown-item" href="#">
                  Order3
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link "> Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ContactUs{" "}
              </a>
            </li>
          </ul>

          <div className="input-group rounded" id="search">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search for products, brands and more"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
