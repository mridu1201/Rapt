import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";
import {Link} from "react-router-dom";
import PositionedMenu from "./dropdown";

function Nav() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Rapt!</h3>
			<nav ref={navRef} className="align-items-left">
				<a><Link to='/'>Home</Link></a>
				<a><Link to='/Events'>Events</Link></a>
				<a  className="click"><PositionedMenu/></a>
				<a><Link to='/AboutUs'>About</Link></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
      </nav>
      
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
      <nav  className="align-items-right">
        <button><Link to='/'>Sign Up</Link></button>
        <button><Link to='/'>Sign In</Link></button>
      </nav>
		</header>
	);

  {/*return (
    <div>
      
      <div className="wrapper1">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars" /></label>
          <div className="content">
            <h3>Rapt!</h3>
            <ul className="links">
              <li><a href="#">Home</a></li>
              <li>
                <a href="#" className="desktop-link">Speciality</a>
                <input type="checkbox" id="show-features" />
                <label htmlFor="show-features">Speciality</label>
                <ul>
                  <li><a href="#">General Medicine</a></li>
                  <li><a href="#">Pediatric Care</a></li>
                  <li><a href="#">Gynaecology</a></li>
                  <li><a href="#">Dental</a></li>
                </ul>
              </li>
              
              <li>
                <a href="#" className="desktop-link">Contact Us</a>
              </li>
              <li><a href="#">Feedback</a></li>
              
            </ul>
          </div>
        </nav>
      </div>
  </div>
  );*/}

}

export default Nav;