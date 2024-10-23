import ThemeToggler from "./ThemeToggler";
import { useTheme } from "./ThemeContext";

function Header() {
  const { theme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg w-100" data-bs-theme={theme}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Planner</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;