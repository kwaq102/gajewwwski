import React from "react";

import photo from "../img/wlan-3131126_640.png";
import { NavLink } from "react-router-dom";
import HeadingSection from "../components/HeadingSection";
// TODO pomyśleć nad zmianą zdjęcia.

const MyAdvantages = () => {
	return (
		<section className="myAdvantages">
			<HeadingSection
				title="Co mnie wyróżnia?"
				nameClass="myAdvantages__title"
			/>

			<div className="myAdvantages__box-first">
				<ul className="myAdvantages__box-first__advantages advantages">
					<li className="myAdvantages__box-first__advantage advantage-item">
						<span className="fa-solid fa-book"></span>
						<h4>Wysokie kwalifikacje</h4>
						<p>
							Odbyłem wiele renomowanych kursów. Uczyłem się od najlepszych, co
							pozwala mi świadczyć usługi na najwyższym poziomie.
							<NavLink
								to="/certyfikaty"
								className="advantage-item__certificates"
							>
								Moje certyfikaty.
							</NavLink>
						</p>
					</li>
					<li className="myAdvantages__box-first__advantage advantage-item">
						<span className="fa-solid fa-user-graduate"></span>
						<h4>Ciągłe Samodoskonalenie</h4>
						<p>
							Branża rozwija się bardzo szybko, a ja ciągle jestem głodny
							wiedzy. Stale rozwijam swoje umiejętności i śledzę najnowsze
							trendy.
						</p>
					</li>
					<li className="myAdvantages__box-first__advantage advantage-item">
						<span className="fa-solid fa-person-rays"></span>
						<h4>Indywidualne Podejście do Klienta</h4>
						<p>
							Każdy klient jest dla mnie wyjątkowy. Stawiam na indywidualne
							podejście, dostosowując się do unikalnych potrzeb i celów.
						</p>
					</li>
				</ul>
			</div>
			<div className="myAdvantages__box-mid">
				<img src={photo} alt="photo" className="myAdvantages__box-mid__image" />
			</div>

			{/* TODO pomyśleć nad zmianą iconek na jakieś kolorowe np.z pixabay'a */}

			<div className="myAdvantages__box-second">
				<ul className="myAdvantages__box-second__advantages advantages">
					<li className="myAdvantages__box-second__advantage advantage-item">
						<span className="fa-solid fa-star"></span>
						<h4>Najnowsze standardy</h4>
						<p>
							W mojej pracy wykorzystuję najnowsze standardy branżowe,
							zapewniając klientom innowacyjne i efektywne rozwiązania.
						</p>
					</li>
					<li className="myAdvantages__box-second__advantage advantage-item">
						<span className="fa-regular fa-handshake"></span>
						<h4>Uczciwość</h4>
						<p>
							Kładę duży nacisk na uczciwość i transparentność. Współpracując ze
							mną, możesz być pewien rzetelności i profesjonalizmu.
						</p>
					</li>
					<li className="myAdvantages__box-second__advantage advantage-item">
						<span className="fa-solid fa-people-line"></span>
						<h4> Dobry kontakt i luźna atmosfera</h4>
						<p>
							Tworzę atmosferę opartą na otwartości i szacunku. Zapewniam dobry
							kontakt oraz luźną, przyjazną atmosferę podczas współpracy.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default MyAdvantages;
