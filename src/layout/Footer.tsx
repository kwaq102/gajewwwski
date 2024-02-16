import React, { useState } from "react";

const Footer = () => {
	const [year, setYear] = useState(new Date().getFullYear());

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__description">
					<div className="footer__logo"></div>
					<div className="footer__text"></div>
				</div>
				<div className="footer__nav">
					<nav className="footer__second-nav"></nav>
				</div>
				<div className="footer__contact">
					<div className="footer__contact__box">
						<div className="footer__contact-phone"></div>
						<div className="footer__contact-email"></div>
						<div className="footer__contact-socials"></div>
					</div>
				</div>
				<div className="footer__copyright">© copyright {year}</div>
			</div>
			<div className="footer__waves-box">
				<div className="footer__waves-waves"></div>
			</div>
		</footer>
	);
};

export default Footer;
