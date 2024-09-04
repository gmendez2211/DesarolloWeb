import { Outlet, Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/Consulta" className="nav-link">
                  Consulta JSON
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/app/about" className="nav-link">
                  Crar Autores
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#create-head-section"
                  className="nav-link"
                  style={{ fontStyle: "italic" }}
                >
                  Otra Opción
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#share-head-section" className="nav-link">
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}
