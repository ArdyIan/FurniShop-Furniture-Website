import "./navbar.css";
import livingRoom from "../../assets/living-room.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  console.log("Navbar loaded");

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-image">
      <img src={livingRoom} alt="livingRoom" className="livingRoom" />
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h2>FurniShop</h2>
            </div>
            <ul className={isOpen ? "nav-link-hamburger active" : "nav-link-hamburger"}>
              <li>
                <a href="/home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="icon-bar" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>

      <div className="headline-txt">
        <h2 className="main-text">Creative Home Simpify your Furniture</h2>
        <p className="sub-text">Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</p>

        <Link to={"/product"} className="btn-shop">
          Shop Now
        </Link>
      </div>
      <div className="info-container">
        <div className="info-box">
          <h2 className="info-box-h2">7</h2>
          <p className="info-box-text">Year Experience</p>
        </div>
        <div className="info-box">
          <h2 className="info-box-h2">2</h2>
          <p className="info-box-text">Opened in the country</p>
        </div>
        <div className="info-box">
          <h2 className="info-box-h2">10k+</h2>
          <p className="info-box-text">Furniture sold</p>
        </div>
        <div className="info-box">
          <h2 className="info-box-h2">260+</h2>
          <p className="info-box-text">Variant Furniture</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
