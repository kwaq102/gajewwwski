import React from "react";

import HeadingSection from "../components/HeadingSection";
import Form from "../components/Form";

const Contact = () => {
	return (
		<section className="contact">
			<div className="contact__container">
				<div className="contact__details">
					<HeadingSection title="Dane kontaktowe" nameClass="contact__title" />

					<div className="contact__details__box">
						<span className="fa-solid fa-mobile-screen contact__details__icon"></span>
						<h5 className="contact__details__box__title">Numer telefonu</h5>
						<p className="contact__details__text">+48 452 199 552</p>
					</div>
					<div className="contact__details__box">
						<span className="fa-regular fa-envelope contact__details__icon"></span>
						<h5 className="contact__details__box__title">E-mail</h5>
						<p className="contact__details__text">gajewwwski@gmail.com</p>
					</div>
					<div className="contact__details__box">
						<span className="fa-solid fa-earth-europe contact__details__icon"></span>
						<h5 className="contact__details__box__title">Adres</h5>
						<p className="contact__details__text">
							On-Line <span>Pracuję zdalnie</span>
						</p>
					</div>
					{/* <div>social media</div> */}
				</div>

				<div className="contact__form-box">
					<HeadingSection
						title="Formularz kontaktowy"
						nameClass="contact__title"
					/>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;