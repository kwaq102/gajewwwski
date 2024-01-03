import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navList } from "../ts/navigationList";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [bgNav, setBgNav] = useState(false);

	const navigation = navList.map(el => (
		<li key={el.navName} className="main-nav__item">
			<NavLink to={el.path} end={el.end} className="main-nav__link">
				{el.navName}
			</NavLink>
		</li>
	));

	const handleScroll = () => {
		if (window.scrollY > 60) {
			setBgNav(true);
		} else {
			setBgNav(false);
		}
	};

	window.addEventListener("scroll", handleScroll);

	return (
		<nav className={`main-nav ${bgNav && "nav-bg"}`}>
			<div className="main-nav__logo">
				gajewwwski<span>.pl</span>
			</div>
			<ul className={`main-nav__list ${menuOpen && "show-nav"}`}>
				{navigation}
			</ul>
			<div
				className={`main-nav__btn ${menuOpen && "open"}`}
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				<div className="main-nav__hamburger"></div>
			</div>
		</nav>
	);
};

export default Navigation;
