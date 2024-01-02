import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="main-nav">
			<div className="main-nav__logo"></div>
			<ul className="main-nav__list">
				<li className="main-nav__item">
					<NavLink className="main-nav__link" to="/oferta">
						Oferta
					</NavLink>
				</li>
				<li className="main-nav__item">
					<NavLink className="main-nav__link" to="/cos">
						Coś
					</NavLink>
				</li>
				<li className="main-nav__item">
					<NavLink className="main-nav__link" to="/test">
						Test
					</NavLink>
				</li>
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
