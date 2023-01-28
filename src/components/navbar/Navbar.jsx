import "./Navbar.scss";
import { useState } from "react";
import { TbArrowBigTop } from "react-icons/tb";
import { Link } from "react-scroll";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 65 ? setStickyNav(true) : setStickyNav(false);
  };
  const showArrow = () => {
    window.scrollY >= 800 ? setScrollTop(true) : setScrollTop(false);
  };
  window.addEventListener("scroll", changeNavBg);
  window.addEventListener("scroll", showArrow);
  return (
    <nav className={stickyNav ? "active" : ""}>
      <h1>STORE</h1>
      <ul>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={-150} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Products
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
      </ul>
      <div
        className={`${scrollTop ? "scroll-top show" : "scroll-top"}`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}
      >
        <TbArrowBigTop className="top-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
