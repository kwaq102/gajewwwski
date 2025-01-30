import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navList } from "../ts/navigationList";

const Footer = () => {
	const [year, setYear] = useState(new Date().getFullYear());

	const navigation = navList.map(el => (
		<li key={el.navName} className="footer__nav__element">
			<NavLink to={el.path} end={el.end} className="footer__nav__link">
				{el.navName}
			</NavLink>
		</li>
	));

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__description">
					<div className="footer__logo">gajewwwski.pl</div>
					<p className="footer__text">
						Tworzę profesjonalne strony internetowe – od landing page, przez
						wizytówki, po blogi i inne. Dopasowuję projekty do Twoich potrzeb,
						żeby były dokładnie takie, jak chcesz. Napisz do mnie, a pomogę
						Twojemu biznesowi zaistnieć w internecie!
					</p>
				</div>
				<div className="footer__nav__box">
					<h5 className="footer__title">Na skróty</h5>
					<nav className="footer__nav">
						<ul className="footer__nav__list">{navigation}</ul>
					</nav>
				</div>
				<div className="footer__contact">
					<div className="footer__contact__box">
						<h5 className="footer__title">Szybki kontakt</h5>

						<div className="footer__contact__details">
							<span className="footer__contact__span">Tel: </span>
							<p className="footer__contact__details-text">+45 452 199 552</p>
						</div>
						<div className="footer__contact__details">
							<span className="footer__contact__span">E-mail: </span>
							<p className="footer__contact__details-text">
								gajewwwski@gmail.com
							</p>
						</div>
						<div className="footer__contact__socials">
							<div className="footer__contact__social-box">
								<a
									href="https://www.facebook.com/gajewwwski.net"
									className="footer__contact__social-link"
								>
									<span className="fa-brands fa-facebook-f"></span>
								</a>
							</div>
							<div className="footer__contact__social-box">
								<a
									href="https://www.linkedin.com/in/kg-kamil-gajewski"
									className="footer__contact__social-link"
								>
									<span className="fa-brands fa-linkedin-in"></span>
								</a>
							</div>

							<div className="footer__contact__social-box">
								<a
									href="https://github.com/kwaq102"
									className="footer__contact__social-link"
								>
									<span className="fa-brands fa-github"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__copyright">
					<p className="footer__copyright-text">
						© {year} gajewwwski.net Wszelkie prawa zastrzeżone
					</p>
					<Link
						to={"./polityka-prywatnosci"}
						className="footer__copyright-link"
					>
						Polityka prywatności
					</Link>
				</div>
			</div>
			<div className="footer__waves-box">
				<div className="footer__waves-waves"></div>
			</div>
		</footer>
	);
};

export default Footer;
