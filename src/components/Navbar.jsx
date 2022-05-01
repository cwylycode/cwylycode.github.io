export function Navbar() {
  return (
    <div className="sidebar">
      <div id="home-icon">

      </div>
      <nav>
        <ul className="nav_links">
          <li><a className="page-link" href="#">about</a></li>
          <li><a className="page-link" href="#">skillz</a></li>
          <li><a className="page-link" href="#">showcase</a></li>
          <li><a className="page-link" href="#">contact</a></li>
        </ul>
        <ul className="nav_soc">
          <li>
            <a href="https://github.com/cwylycode">
              {/* Github */}
            </a>
          </li>
          <li>
            <a href="#">
              {/* linkedin */}
            </a>
          </li>
        </ul>
      </nav>
      <div id="bottom-icon">
        {/* svg here */}
      </div>
    </div>
  )
}