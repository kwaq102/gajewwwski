import { Link } from "react-router-dom";
import HeaderPage from "../components/HederPage";
import ButtonLink from "../components/ButtonLink";

import aboutImg from "../img/aboutPageImg.jpg";
import webImg from "../img/web-1045994_640.jpg";
import coopImg from "../img/smartphone-6279612_1920.jpg";
import learningImg from "../img/web-design-2038872_1920.jpg";

const AboutPage = () => {
	// SKRÓCIĆ TE NAZWY KLAS O ABOUT (JAK W OFFER)
	return (
		<div className="AboutPage page">
			{/* https://demo.templatemonster.com/pl/demo/293176.html */}
			<HeaderPage
				title="O mnie"
				description="Freelancer zafascynowany programowaniem i tworzeniem stron internetowych. Dla mnie praca w tej dziedzinie to nie tylko zawód, lecz także się źródło ogromnej satysfakcji."
				photo={aboutImg}
			/>

			<section className="AboutPage__about">
				<div className="AboutPage__about__box">
					<h2 className="AboutPage__about__heading heading-h2">
						Od pasji <span>do profesji</span>
					</h2>

					<div className="AboutPage__about__box__description">
						<p className="AboutPage__about__box__description__text">
							Przez lata z pasją poszerzam swoją wiedzę w dziedzinie
							programowania webowego i tworzenia stron internetowych poprzez
							udział w różnorodnych kursach. To nieustanne kształcenie pozwala
							mi być na bieżąco z najnowszymi trendami i technologiami.
						</p>
						<ButtonLink
							href="/o-mnie/certyfikaty"
							nameClass="AboutPage__btn"
							textBtn="Moje certyfikaty"
						/>
						<div className="AboutPage__about__box__wrapper-img">
							<img
								src={learningImg}
								alt=""
								className="AboutPage__about__box__img"
							/>
						</div>
					</div>
				</div>

				<div className="AboutPage__about__box dark-bg">
					<h2 className="AboutPage__about__heading heading-h2">
						Z Perspektywy <span>klienta</span>
					</h2>
					<div className="AboutPage__about__box__description">
						<p className="AboutPage__about__box__description__text">
							Jednak to nie tylko moja techniczna wiedza czyni mnie skutecznym
							freelancerem. Moje doświadczenie w obszarze pracy z klientem i
							dogłębne zrozumienie ich potrzeb stawiają mnie na wysokiej pozycji
							do bezproblemowej realizacji powierzonych mi zadań. Zależy mi nie
							tylko na dostarczeniu technicznie doskonałych rozwiązań, ale także
							na spełnieniu oczekiwań klienta i osiągnięciu zamierzonych celów.
						</p>
						{/* <ButtonLink
							href="/kontakt"
							nameClass="AboutPage__btn"
							textBtn="Skontaktuj się ze mną"
						/> */}
						<div className="AboutPage__about__box__wrapper-img">
							<img src={webImg} alt="" className="AboutPage__about__box__img" />
						</div>
					</div>
					<h2 className="AboutPage__about__heading heading-h2">
						Budowanie Partnerskich <span>Relacji</span>
					</h2>
					<div className="AboutPage__about__box__description">
						<p className="AboutPage__about__box__description__text">
							Jako freelancer doskonale współpracuję z małymi i średnimi
							firmami. Każdy projekt traktuję z największym szacunkiem wobec
							klienta, starając się pełnię zrozumieć jego potrzeby i
							oczekiwania. Moim celem jest budowanie partnerskich relacji
							opartych na wzajemnym zaufaniu oraz efektywnej komunikacji, aby
							wspólnie osiągnąć sukces w projektach i sprostać oczekiwaniom.
						</p>
					</div>
					<div className="AboutPage__about__box__img">
						<img src={coopImg} alt="" className="AboutPage__about__box__img" />
					</div>
					<ButtonLink
						href="/kontakt"
						nameClass="AboutPage__btn"
						textBtn="Skontaktuj się ze mną"
					/>
				</div>

				<div className="AboutPage__about__box">
					<h2 className="AboutPage__about__heading heading-h2">
						Moje <span>certyfikaty</span>
					</h2>
					<div className="AboutPage__about__box__certificates">
						TUTAJ BĘDZIE JAKAŚ GALERIA
					</div>
				</div>

				<div
					style={{
						height: 300,
					}}
				>
					(tutaj może jakiś background attachment) wartości którymi się kieruję
					<br />
					może by tu dać sekcję z certyfikatami?
					<br /> gotowy by stworzyć coś fajnego? <br />
					sprawdź co mogę CI zaoferować! <button>oferta</button>
					<br />
				</div>

				{/* <div className="AboutPage__about__box">
					<p className="AboutPage__about__box__description__text">
						Zapraszam do korzystania z moich umiejętności i doświadczenia
					</p>
					<Link to="/kontat">Kontakt</Link>
				</div> */}
			</section>
		</div>
	);
};

export default AboutPage;
