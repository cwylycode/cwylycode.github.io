import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Navbar() {
  return (
    <nav className="sidebar">
      <div id="home-icon">
        <svg id="e1tLMz8hdxq1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
          <path d="M0,256.00001C0,114.61511,114.61511,0,256,0s256,114.61511,256,256.00001-114.61511,256.00001-256,256.00001-256-114.61511-256-256.00001ZM255.99997,486.99999c127.57778,0,231-103.42222,231-231s-103.42222-231-231-231-231,103.42222-231,231s103.42222,231,231,231Z" strokeWidth="0" />
        </svg>
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
            <a href={"https://github.com/cwylycode"} target={"_blank"} referrerPolicy={"no-referrer"}>
              <BsGithub />
            </a>
          </li>
          <li>
            <a href={"#"} target={"_blank"} referrerPolicy={"no-referrer"}>
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </nav>
      <div id="bottom-icon">
        {/* svg here */}
      </div>
    </nav>
  )
}