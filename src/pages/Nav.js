import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";
import {Link} from "react-router-dom";

function Nav() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="justify-content: space-left">
			<h3>Rapt !</h3>
				<div className="flex-initial">
			<nav ref={navRef} className="align-items-left">
				<a><Link to='/'>Home</Link></a>
				<a><Link to='/Events'>Events</Link></a>
				<a  className="click"><Link to='/Gallery'>Gallery</Link></a>
				<a><Link to='/AboutUs'>About us</Link></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
				</div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav;